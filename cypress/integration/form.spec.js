// form.spec.js created with Cypress
//
// Start writing your Cypress tests below!
// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:
// https://on.cypress.io/writing-first-test

/**
 * why use `.then`?
 * @see https://docs.cypress.io/guides/core-concepts/variables-and-aliases#Return-Values
 */

const D2C = { name: 'Semi D2C', role: 'Engineer' };
const C2D = { name: 'Semi C2D', role: 'Designer' };
const DSM = { name: 'Semi DSM', role: 'Designer' };

describe('Form', () => {
    // it('formApi-setValue with array field path, 3 -> 2, remove middle line field', () => {
    //     cy.visit('http://127.0.0.1:6006/iframe.html?path=/story/form--use-form-api-set-value-update-array');
    //     cy.get(':nth-child(3) > .semi-button').click();
    //     // line 1
    //     cy.get('[x-field-id="effects[0].name"] > .semi-form-field-main > .semi-input-wrapper > input').should('have.value', '1-name');
    //     cy.get('[x-field-id="effects[0].type"] > .semi-form-field-main > .semi-input-wrapper > input').should('have.value', '1-type');
    //     // line 2
    //     cy.get('[x-field-id="effects[1].name"] > .semi-form-field-main > .semi-input-wrapper > input').should('have.value', '3-name');
    //     cy.get('[x-field-id="effects[1].type"] > .semi-form-field-main > .semi-input-wrapper > input').should('have.value', '3-type');
    //     // cy.get('body').find('.semi-popover .semi-datepicker').should('have.length', 0);
    // });

    // ❌ 发现了bug
    // modify
    // it('Basic usage - modify、add blank row、add withInitValue row', () => {
    //     cy.visit('http://127.0.0.1:6006/iframe.html?path=/story/form--basic-array-field-demo');
    //     cy.get('#data-0-name').type('-new');
    //     cy.get('#data-0-role').type('-new');
    //     cy.get('#data-0-name').should('have.value', 'Semi D2C-new');
    //     cy.get('#data-0-role').should('have.value', 'Engineer-new');

    //     // add blank row
    //     cy.get('#add').click();
    //     cy.get('#data-2-name').should('have.value', '');
    //     cy.get('#data-2-role').should('have.value', '');

    //     // add withInitValue row
    //     cy.get('#addWithInit').click();
    //     cy.get('#data-3-name').should('have.value', 'Semi New-3');
    //     cy.get('#data-3-role').should('have.value', 'Designer');
    // });

    // it('Basic usage - add withInitValue row、add blank row', () => {
    //     cy.visit('http://127.0.0.1:6006/iframe.html?path=/story/form--basic-array-field-demo');

    //     // add withInitValue row
    //     cy.get('#addWithInit').click();
    //     cy.get('#data-2-name').should('have.value', 'Semi New-3');
    //     cy.get('#data-2-role').should('have.value', 'Designer');

    //     // add blank row
    //     cy.get('#add').click();
    //     cy.get('#data-3-name').should('have.value', '');
    //     cy.get('#data-3-role').should('have.value', '');
    // });

    // // // remove row
    // it('Remove row - 3 -> 2, remove middle', () => {
    //     cy.visit('http://127.0.0.1:6006/iframe.html?path=/story/form--remove-demo');
    //     cy.get('#data-1 button').click();

    //     cy.get('#data-0-name').should('have.value', D2C.name);
    //     cy.get('#data-0-role').should('have.value', D2C.role);
    //     cy.get('#data-1-name').should('have.value', DSM.name);
    //     cy.get('#data-1-role').should('have.value', DSM.role);
    // });

    // it('Remove row - 3 -> 2, remove middle, 2 -> 1, remove head', () => {
    //     cy.visit('http://127.0.0.1:6006/iframe.html?path=/story/form--remove-demo');
    //     cy.get('#data-1 button').click();
    //     cy.get('#data-0-name').should('have.value', D2C.name);
    //     cy.get('#data-0-role').should('have.value', D2C.role);
    //     cy.get('#data-1-name').should('have.value', DSM.name);
    //     cy.get('#data-1-role').should('have.value', DSM.role);

    //     cy.get('#data-0 button').click();
    //     cy.get('#data-0-name').should('have.value', DSM.name);
    //     cy.get('#data-0-role').should('have.value', DSM.role);
    //     cy.get('#data-1').should('not.exist');
    // });

    // it('Remove row - 3 -> 2, remove head', () => {
    //     cy.visit('http://127.0.0.1:6006/iframe.html?path=/story/form--remove-demo');
    //     cy.get('#data-2').should('exist');
    //     cy.get('#data-0 button').click();
    //     cy.get('#data-2').should('not.exist');

    //     cy.get('#data-0-name').should('have.value', C2D.name);
    //     cy.get('#data-0-role').should('have.value', C2D.role);
    //     cy.get('#data-1-name').should('have.value', DSM.name);
    //     cy.get('#data-1-role').should('have.value', DSM.role);

    //     cy.get('#data-0 button').click();
    //     cy.get('#data-0-name').should('have.value', DSM.name);
    //     cy.get('#data-0-role').should('have.value', DSM.role);
    // });

    // it('Remove row - 3 -> 2, remove last', () => {
    //     cy.visit('http://127.0.0.1:6006/iframe.html?path=/story/form--remove-demo');
    //     cy.get('#data-2').should('exist');
    //     cy.get('#data-2 button').click();
    //     cy.get('#data-2').should('not.exist');

    //     cy.get('#data-0-name').should('have.value', D2C.name);
    //     cy.get('#data-0-role').should('have.value', D2C.role);
    //     cy.get('#data-1-name').should('have.value', C2D.name);
    //     cy.get('#data-1-role').should('have.value', C2D.role);
    // });

    // // it('Basic usage - add、remove、reset', () => { });

    // // reset
    // it('Reset Usage: modify  => reset ', () => {
    //     cy.visit('http://127.0.0.1:6006/iframe.html?path=/story/form--reset-demo');
    //     cy.get('#data-0-name').type('-new');
    //     cy.get('#data-0-role').type('-new');

    //     cy.get('#data-0-name').should('have.value', `${D2C.name}-new`);
    //     cy.get('#data-0-role').should('have.value', `${D2C.role}-new`);

    //     cy.get('button[type=reset]').click();
    //     cy.get('#data-0-name').should('have.value', `${D2C.name}`);
    //     cy.get('#data-0-name').should('have.value', `${D2C.name}`);
    // });

    // it('Reset Usage: length 2 -> 1  => reset ', () => {
    //     cy.visit('http://127.0.0.1:6006/iframe.html?path=/story/form--reset-demo');
    //     cy.get('#data-0 button').click();
    //     cy.get('#data-1').should('not.exist');
    //     cy.get('button[type=reset]').click();

    //     // cy.get('#data-1').should('exist');
    //     cy.get('#data-0-name').should('have.value', `${D2C.name}`);
    //     cy.get('#data-0-role').should('have.value', `${D2C.role}`);
    //     cy.get('#data-1-name').should('have.value', `${C2D.name}`);
    //     cy.get('#data-1-role').should('have.value', `${C2D.role}`);
    // });


    // it('Reset Usage: length 2 -> 0 -> 3  => reset ', () => { 
    //     cy.visit('http://127.0.0.1:6006/iframe.html?path=/story/form--reset-demo');
    //     cy.get('#data-1 button').click();
    //     cy.get('#data-0 button').click();
    //     cy.get('#data-0').should('not.exist');

    //     cy.get('#addWithInit').click();
    //     cy.get('#addWithInit').click();
    //     cy.get('#addWithInit').click();
    //     cy.get('#data-2').should('exist');

    //     cy.get('button[type=reset]').click();
    //     cy.get('#data-0-name').should('have.value', `${D2C.name}`);
    //     cy.get('#data-0-role').should('have.value', `${D2C.role}`);
    //     cy.get('#data-1-name').should('have.value', `${C2D.name}`);
    //     cy.get('#data-1-role').should('have.value', `${C2D.role}`);
    //     cy.get('#data-2').should('not.exist');
    // });

    // it('Reset Usage: length 2 -> 0 -> 2  => reset ', () => {
    //     cy.visit('http://127.0.0.1:6006/iframe.html?path=/story/form--reset-demo');
    //     cy.get('#data-1 button').click();
    //     cy.get('#data-0 button').click();
    //     cy.get('#data-0').should('not.exist');

    //     cy.get('#addWithInit').click();
    //     cy.get('#addWithInit').click();
    //     cy.get('.line').should('have.length', 2);

    //     cy.get('button[type=reset]').click();
    //     cy.get('#data-2').should('not.exist');
    //     cy.get('#data-0-name').should('have.value', `${D2C.name}`);
    //     cy.get('#data-0-role').should('have.value', `${D2C.role}`);
    //     cy.get('#data-1-name').should('have.value', `${C2D.name}`);
    //     cy.get('#data-1-role').should('have.value', `${C2D.role}`);
    // });

    // it('Combine Usage', () => {
    //     // add -> remove -> modify
    //     cy.visit('http://127.0.0.1:6006/iframe.html?path=/story/form--basic-array-field-demo', {
    //         onBeforeLoad(win) {
    //             cy.stub(win.console, 'log').as('consoleLog');
    //         },
    //     });
    //     cy.get('#addWithInit').click();
    //     cy.get('#data-1 button').click();
    //     cy.get('#data-0-role').type('-0');
    //     cy.get('#data-0-name').type('-0');

    //     cy.get('#data-0-name').should('have.value', `${D2C.name}-0`);
    //     cy.get('#data-0-role').should('have.value', `${D2C.role}-0`);
    //     cy.get('#data-1-name').should('have.value', `Semi New-3`);
    //     cy.get('#data-1-role').should('have.value', `Designer`);
    // });

    // it('combine usage-2', () => {
    //     // add -> remove -> modify -> reset
    //     cy.visit('http://127.0.0.1:6006/iframe.html?path=/story/form--basic-array-field-demo');
    //     cy.get('#data-1 button').click();
    //     cy.get('#data-0-role').type('-0');
    //     cy.get('#data-0-name').type('-0');
    //     cy.get('button[type=reset]').click();
    //     cy.get('#data-0-name').should('have.value', `${D2C.name}`);
    //     cy.get('#data-0-role').should('have.value', `${D2C.role}`);
    //     cy.get('#data-1-name').should('have.value', `${C2D.name}`);
    //     cy.get('#data-1-role').should('have.value', `${C2D.role}`);
    // });


    // it('Init - Form Props initValues、ArrayField initValue、Field initValue', () => { 
    // // 一个 Form 三个 ArrayField
    // });
    // it('Init - combine', () => {});

    // it('sync setValue - modify value, 2 -> 2', () => { });
    // it('sync setValue - add, 2 -> 3, add first', () => { });
    // it('sync setValue - add, 2 -> 3, add middle', () => { });
    // it('sync setValue - add, 2 -> 3, add last', () => { });
    // it('sync setValue - remove, 3 -> 2, remove first', () => { });
    // it('sync setValue - remove, 3 -> 2, remove middle', () => { });
    // it('sync setValue - remove, 3 -> 2, remove last', () => { });
    // it('sync setValue - remove, 3 -> 0, remove all', () => { });

    // it('sync setValues - modify', () => { });
    // it('sync setValues - add', () => { });
    // it('sync setValues - remove', () => { });

    // it('ASync setValues', () => { });

    // it('ASync setValue', () => { });
    // it('ASync setValue: ', () => { });


    // it('2 Nested ArrayField - add/remove', () => { });
    // it('2 Nested ArrayField - reset', () => { });
    // it('2 Nested ArrayField - formApi.setValues', () => { });
    // it('2 Nested ArrayField - formApi.setValue level-1', () => { });
    // it('2 Nested ArrayField - formApi.setValue level-2', () => { });
    // it('3 Nested ArrayField - add/remove', () => {});
});