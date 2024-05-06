import React, { CSSProperties, PropsWithChildren, ReactNode } from 'react';
import ColorPickerFoundation, { ColorPickerProps, ColorPickerState } from '@douyinfe/semi-foundation/colorPicker/foundation';
import BaseComponent from '../_base/baseComponent';
import { PopoverProps } from '../popover';
import ColorChooseArea from './ColorChooseArea';
import { ColorPickerAdapter } from '@douyinfe/semi-foundation/colorPicker/foundation';
import AlphaSlider from './AlphaSlider';
import ColorSlider from './ColorSlider';
import DataPart from './DataPart';
import cls from 'classnames';
import "@douyinfe/semi-foundation/colorPicker/colorPicker.scss";
import { cssClasses } from '@douyinfe/semi-foundation/colorPicker/constants';
import Popover from '../popover';


export interface ColorPickerReactProps extends ColorPickerProps{
    usePopover?: boolean;
    popoverProps?: PopoverProps;
    className?: string;
    style?: CSSProperties;
    bottomSlot?: ReactNode;
    topSlot?: ReactNode
}


export interface ColorPickerReactState extends ColorPickerState{
}


class ColorPicker extends BaseComponent<PropsWithChildren<ColorPickerReactProps>, ColorPickerReactState> {
    static __SemiComponentName__ = "ColorPicker";
    public foundation: ColorPickerFoundation;

    constructor(props: ColorPickerReactProps) {
        super(props);
        this.foundation = new ColorPickerFoundation(this.adapter);
        const initValue = (props.value ?? props.defaultValue);
        this.state = {
            currentColor: initValue,
        };
    }

    static defaultProps = {
        defaultValue: {
            hsva: { h: 0, s: 0, v: 0, a: 1 },
            rgba: { r: 0, g: 0, b: 0, a: 1 },
            hex: '#000000'
        },
        defaultFormat: 'rgba'
    }

    get adapter(): ColorPickerAdapter<ColorPickerReactProps, ColorPickerReactState> {
        return {
            ...super.adapter,
            notifyChange: (value)=>{
                this.props.onChange?.(value);
            },
            notifyAlphaChangeByHandle: (newAlpha)=>{
                this.foundation.handleChangeA(this.getCurrentColor(), newAlpha.a);
            },
            notifyColorChangeByHandle: ({ h })=>{
                this.foundation.handleChangeH(this.getCurrentColor(), h);
            }
        };
    }

    static colorStringToValue = (raw: string)=>{

    }

    getCurrentColor = ()=>{
        return this.props.value ? (this.props.value) : this.state.currentColor;
    }


    renderPicker() {
        const { className: userClassName } = this.props;
        const className = cls(`${cssClasses.PREFIX}`, userClassName);
        const currentColor = this.getCurrentColor();
        return <div className={className}>
            {this.props.topSlot}
            <ColorChooseArea hsva={this.state.currentColor.hsva} foundation={this.foundation} onChange={({ s, v }) => {
                this.foundation.handleChange( { s, v, a: this.state.currentColor.hsva.a, h: this.state.currentColor.hsva.h }, 'hsva');
            }} handleSize={20} width={this.props.width ?? 280} height={this.props.height ?? 280}/>
            <ColorSlider width={this.props.width ?? 280}
                height={10}
                handleSize={18}
                hue={currentColor.hsva.h}
                className={'colorSliderWrapper'}
                foundation={this.foundation}
            />
            <AlphaSlider width={this.props.width ?? 280}
                height={10}
                handleSize={18}
                hsva={currentColor.hsva}
                className={'alphaSliderWrapper'}
                foundation={this.foundation}
            />
            <DataPart currentColor={currentColor}
                alpha={this.props.alpha}
                width={this.props.width ?? 280 }
                foundation={this.foundation}
                defaultFormat={this.props.defaultFormat}/>
            {this.props.bottomSlot}
        </div>;
    }

    render() {
        if (this.props.usePopover) {
            return <Popover {...this.props.popoverProps} className={cls(`${cssClasses.PREFIX}-popover`, this.props.popoverProps?.className)} content={this.renderPicker()}>
                {this.props.children}
            </Popover>;
        } else {
            return this.renderPicker();
        }
    }
}


export default ColorPicker;
