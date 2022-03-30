import { AcceptedPlugin, Declaration, Postcss, Root, Rule } from "postcss";
import fs from 'fs-extra';
import parse from 'postcss-value-parser';
import replaceWithCalc from "../utils/replaceWithCalc";
import replaceOther from "../utils/replaceOther";
import { trimStart } from "lodash";



//
// let extraScss="";




const getScssVariableNotUsedInSelectorSetPlugin=(scssVariableInSelectorSet:Set<string>)=>{
    return {
        postcssPlugin:"semi-scss-get-scss-var-in-selector-plugin",
        Root(root:Root,postcss:Postcss){
            //console.log(root)
        },
        Once(root:Root){
            //  console.log(root)
        },
        Rule(rule){
            if (/#\{\$[\w\d]+\}/.test(rule.selector)){
                const matches=rule.selector.matchAll(/#\{(\$[\w\d]+)\}/g);
                for (const match of matches){
                    if (match[1]){
                        scssVariableInSelectorSet.add(match[1]);
                    }
                }
            }
        }

    } as AcceptedPlugin;
};


const transVarPlugin=(scssVariableInSelectorSet:Set<string>,extraCssVarDefineList:{key:string,value:string}[])=>{

    return {
        postcssPlugin:"semi-scss-to-css-var-plugin",
        Root(root:Root,postcss:Postcss){
            //console.log(root)
        },
        Once(root:Root){
            //  console.log(root)
        },
        Declaration(decl:Declaration){
            //@ts-ignore
            if (!decl.isVisited){
                let value = decl.value;
                value = replaceOther(value);
                value = replaceWithCalc(value);
                decl.value=value;

                //inject css variable define
                if (/\$[\w\d_-]+$/.test(decl.prop)){
                    if (!scssVariableInSelectorSet.has(decl.prop)){
                        const scssVariable=trimStart(decl.prop,'$');
                        const cssVariable =`--semi-css-${scssVariable}`;
                        // const cssDeclaration=new Declaration({ prop:cssVariable,value:decl.value });
                        // //@ts-ignore
                        // cssDeclaration.isVisited=true;
                        // decl.after(cssDeclaration);
                        extraCssVarDefineList.push({ key:cssVariable,value:decl.value });
                        decl.value=`var(${cssVariable})`;
                    }
                }
                //@ts-ignore
                decl.isVisited=true;
            }


        },
    } as AcceptedPlugin;
};


transVarPlugin.postcss=true;
getScssVariableNotUsedInSelectorSetPlugin.postcss=true;




export {
    transVarPlugin,
    getScssVariableNotUsedInSelectorSetPlugin
};
