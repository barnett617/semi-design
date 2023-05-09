/* eslint-disable */
import React, { useState, useLayoutEffect, Component } from 'react';
import { Button, Modal, TreeSelect, Row, Col, Avatar, Select as BasicSelect,
    Form,
    useFormState,
    useFormApi,
    useFieldApi,
    useFieldState,
    withFormState,
    withFormApi,
    withField,
    ArrayField,
    AutoComplete,
    Collapse,
    Space,
    TextArea,
    Icon } from '../../../index';
import { IconPlusCircle, IconMinusCircle, } from '@douyinfe/semi-icons';

import { ComponentUsingFormState } from '../Hook/hookDemo';
const { Input, Select, DatePicker, Switch, Slider, CheckboxGroup, Checkbox, RadioGroup, Radio, TimePicker, InputNumber, InputGroup } = Form;

class ArrayFieldCollapseDemo extends React.Component {
    constructor() {
        super();
        this.state = {
            actions: [],
        };
    }

    renderItems(arrayFields, values) {
        console.log(values);
        return (
            <Collapse keepDOM>
                {JSON.stringify(values)}
                {arrayFields.map(({ field, key, remove }, i) => (
                    <Collapse.Panel header="触发条件" itemKey={i.toString()} key={key}>
                        <Form.Input
                            field={`${field}[name]`}
                            label={`特效类型：（${field}.name）`}
                            style={{ width: 200, marginRight: 16 }}
                        />
                        <Button type="danger" onClick={remove} style={{ margin: 16 }}>
                            remove
                        </Button>
                    </Collapse.Panel>
                ))}
                {/* {arrayFields.length && values.actions[0].name ? '2' : '1'} */}
            </Collapse>
        );
    }

    render() {
        let { actions } = this.state;

        return (
            <Form style={{ width: 500 }} labelPosition="left" labelWidth="220px" allowEmpty>
                {({ values }) => (
                    <ArrayField field="actions" initValue={actions}>
                        {({ add, arrayFields }) => (
                            <React.Fragment>
                                <Button onClick={add}>Add</Button>
                                {this.renderItems(arrayFields, values)}
                            </React.Fragment>
                        )}
                    </ArrayField>
                )}
            </Form>
        );
    }
}

// 使用Form Props设置 ArrayField的initValues
class ArrayFieldWithFormInitValues extends React.Component {
    constructor() {
        super();
        this.state = {
            data: {
                c: 'c',
                effects: [
                    { name: 'form-level-init-sugar', time: 'form-level-init-3min', otherKey: 1 },
                    { name: 'form-level-init-bacon', time: 'form-level-init-6min', otherKey: 2, key: 343 },
                ],
            },
            flag: true
        };
        this.getFormApi = this.getFormApi.bind(this);
        this.change = this.change.bind(this);
    }

    change = () => {
        let number = this.formApi.getValue('number');
        let newData = Array.from({ length: number }, (v, i) => ({
            name: `${i}-name`,
            time: `${i}-time`
        }));
        console.log(newData);
        this.formApi.setValue('effects', newData);
    }

    getFormApi(formApi) {
        this.formApi = formApi;
    }

    render() {
        return (
            <Form
                onChange={(...v) => console.log('onchange:' + v)}
                onValueChange={(...v) => console.log('onValueChange:' + v)}
                getFormApi={this.getFormApi}
                initValues={this.state.data}
            >
                {/* <Button onClick={this.setValues}>setValues</Button> */}
                <Row>
                    <Col span={12}>
                        <ArrayField field="effects">
                            {({ add, arrayFields }) => (
                                <React.Fragment>
                                    <Button onClick={add} type="primary">Add</Button>
                                    {
                                        arrayFields.map(({ field, key, remove }, i) => (
                                            <div key={key}>
                                                <Input
                                                    field={`${field}[name]`}
                                                    label={`${field}.name`}
                                                    // initValue="field-level-init-2D"
                                                />
                                                <Input
                                                    field={`${field}[time]`}
                                                    label={`${field}.time`}
                                                />
                                                <Button type="danger" onClick={remove}>remove</Button>
                                            </div>
                                        ))
                                    }
                                </React.Fragment>
                            )}
                        </ArrayField>
                        <Button htmlType="submit">submit</Button>
                        <Button htmlType='reset'>Reset</Button>
                        <Form.InputNumber field="number" label="期望个数" />
                        <Button onClick={this.change}>改变</Button>
                    </Col>
                    <Col span={12}>
                        <ComponentUsingFormState />
                    </Col>
                </Row>
            </Form>
        );
    }
}


// 使用 ArrayField props initValue来设置初始值
class ArrayFieldWithInitValue extends React.Component {
    constructor() {
        super();
        this.state = {
            data: {
                effects: [
                    { name: 'arrayField-props.initValue-0-name', time: 'arrayField-props.initValue-0-time', otherKey: 1 },
                    { name: 'arrayField-props.initValue-1-name', time: 'arrayField-props.initValue-1-time', otherKey: 453 },
                ],
            },
            flag: true
        };
        this.getFormApi = this.getFormApi.bind(this);
        this.change = this.change.bind(this);
    }

    componentDidMount() {
        this.formApi.setValues({
            effects: [
                { name: "脸部贴纸", type: "2D" },
                { name: "前景贴纸", type: "3D" },
            ],
            test: 'fff'
        })
    }

    change = () => {
        let number = this.formApi.getValue('number');
        let newData = Array.from({ length: 2 }, (v, i) => ({
            name: `${i}-name`,
            time: `${i}-time`
        }));
        console.log(newData);
        this.formApi.setValue('effects', newData);
    }

    getFormApi(formApi) {
        this.formApi = formApi;
    }

    render() {
        const { effects }  = this.state.data;
        return (
            <Form
                onChange={(...v) => console.log('onchange:' + v)}
                onValueChange={(...v) => console.log('onValueChange:' + v)}
                getFormApi={this.getFormApi}
            >
                {/* <Button onClick={this.setValues}>setValues</Button> */}
                <Row>
                    <Col span={12}>
                        <ArrayField field="effects">
                            {({ add, arrayFields }) => (
                                <React.Fragment>
                                    <Button onClick={add} type="primary">Add</Button>
                                    {
                                        arrayFields.map(({ field, key, remove }, i) => (
                                            <div key={key}>
                                                <Input
                                                    field={`${field}[name]`}
                                                    label={`${field}.name`}
                                                    // initValue="field-level-init-2D"
                                                />
                                                <Input
                                                    field={`${field}[time]`}
                                                    label={`${field}.time`}
                                                />
                                                <Button type="danger" onClick={remove}>remove</Button>
                                            </div>
                                        ))
                                    }
                                </React.Fragment>
                            )}
                        </ArrayField>
                        <Button htmlType="submit">submit</Button>
                        <Button htmlType='reset'>Reset</Button>
                        {/* <Form.InputNumber field="number" label="期望个数" /> */}
                        {/* <Button onClick={this.change}>改变</Button> */}
                    </Col>
                    <Col span={12}>
                        <ComponentUsingFormState />
                    </Col>
                </Row>
            </Form>
        );
    }
}

/* basic usage */
class ArrayFieldDemo extends React.Component {
    constructor() {
        super();
        this.state = {
            data: {
                c: 'c',
                test: [
                    // {},
                    // {},
                    { name: 'sugar', time: '3min' },
                    // { name: 'bacon', time: '6min', key: 'c2' },
                    { name: 'bacon', time: '6min' },
                ],
            },
            flag: true
        };
        this.getFormApi = this.getFormApi.bind(this);
    }

    change = () => {
        let number = this.formApi.getValue('number');
        let newData = Array.from({ length: number }, (v, i) => ({
            name: `${i}-name`,
            time: `${i}-time`
        }));
        this.formApi.setValue('effects', newData);
    }

    clear = () => {
        // this.formApi.setValues({ number: 3 });
        // this.formApi.setValues({}, { isOverride: true });
        this.formApi.setValues({ number: 3 }, { isOverride: true });
    }

    getFormApi(formApi) {
        this.formApi = formApi;
    }

    render() {
        return (
            <Form
                // onChange={(...v) => console.log(v)}
                onValueChange={(...v) => console.log(v)}
                getFormApi={this.getFormApi}>
                <Row>
                    <Col span={12}>
                        <ArrayField field="effects" initValue={this.state.data.test}>
                            {({ add, arrayFields }) => (
                                <React.Fragment>
                                    <Button onClick={add} type="primary">Add</Button>
                                    <Button onClick={this.clear} type="primary">Clear by setValues empty Object</Button>
                                    {
                                        arrayFields.map(({ field, key, remove }, i) => (
                                            <div key={key}>
                                                <Input
                                                    field={`${field}[name]`}
                                                    label={`${field}.name`}
                                                    // initValue='test'
                                                />
                                                <Input
                                                    field={`${field}[time]`}
                                                    label={`${field}.time`}
                                                />
                                                <Button type="danger" onClick={remove}>remove</Button>
                                            </div>
                                        ))
                                    }
                                </React.Fragment>
                            )}
                        </ArrayField>
                        <Form.InputNumber field="number" label="期望个数" />
                        <Space>
                            <Button onClick={this.change}>改变</Button>
                            <Button htmlType="submit">submit</Button>
                            <Button htmlType='reset'>Reset</Button>
                        </Space>
                    </Col>
                    <Col span={12}>
                        <ComponentUsingFormState />
                    </Col>
                </Row>
            </Form>
        );
    }
}


// Fix 1409
class ArrayFieldSetValues extends React.Component {
    constructor() {
        super();
        this.state = {
            data: {
            },
        };
        this.getFormApi = this.getFormApi.bind(this);
    }

    componentDidMount() {
        this.formApi.setValues({
            effects: [
                { name: "Semi D2C", role: "Engineer" },
                { name: "Semi DSM", role: "Designer" },
            ],
            test: 'fff'
        })
    }

    getFormApi(formApi) {
        this.formApi = formApi;
    }

    render() {
        return (
            <Form
                // onChange={(...v) => console.log(v)}
                onValueChange={(...v) => console.log(v)}
                getFormApi={this.getFormApi}>
                <Row>
                    <Col span={12}>
                        <ArrayField field="effects">
                            {({ add, arrayFields }) => (
                                <React.Fragment>
                                    <Button onClick={add} type="primary">Add</Button>
                                    {
                                        arrayFields.map(({ field, key, remove }, i) => (
                                            <div key={key}>
                                                <Input
                                                    field={`${field}[name]`}
                                                    label={`${field}.name`}
                                                    // initValue='test'
                                                />
                                                <Input
                                                    field={`${field}[role]`}
                                                    label={`${field}.role`}
                                                />
                                                <Button type="danger" onClick={remove}>remove</Button>
                                            </div>
                                        ))
                                    }
                                </React.Fragment>
                            )}
                        </ArrayField>
                        <Form.Input field="test" label="Test" />
                        <Space>
                            <Button htmlType='reset'>Reset</Button>
                        </Space>
                    </Col>
                    <Col span={12}>
                        <ComponentUsingFormState />
                    </Col>
                </Row>
            </Form>
        );
    }
}



// TODO 有相似作用的 e2e demo test了，这个可以删掉
class AsyncSetArrayField extends React.Component {
    constructor() {
        super();
        this.state = {
            data: [
                { name: 'Semi D2C', role: 'Engineer' },
                { name: 'Semi C2D', role: 'Designer' },
            ]
        };
    }

    getFormApi = (formApi) => {
        this.formApi = formApi;
    }

    change = () => {
        let rules = this.formApi.getValue('rules');
        if (!rules) {
            efferulests = [];
        }
        rules.push({ name: `Semi ${new Date().valueOf()}`, role: 'Designer', key: rules.length + 1  });
        setTimeout(() => {
            this.formApi.setValue('rules', rules);
        }, 300);
   }

    render() {
        let { data } = this.state;
        const ComponentUsingFormState = () => {
            const formState = useFormState();
            return (
                <TextArea style={{ marginTop: 10 }} value={JSON.stringify(formState)} />
            );
        };
        return (
            <Form style={{ width: 800 }} labelPosition='left' labelWidth='100px' allowEmpty getFormApi={this.getFormApi}>
                <ArrayField field='rules' initValue={data}>
                    {({ add, arrayFields, addWithInitValue }) => (
                        <React.Fragment>
                            <Button onClick={this.change} theme='light'>change</Button>
                            <Button onClick={add} icon={<IconPlusCircle />} theme='light'>Add new line</Button>
                            <Button icon={<IconPlusCircle />} onClick={() => {addWithInitValue({ name: `Semi DSM ${arrayFields.length + 1}`, role: 'Designer' });}} style={{ marginLeft: 8 }}>Add new line with init value</Button>
                            {
                                arrayFields.map(({ field, key, remove }, i) => (
                                    <div key={key} style={{ width: 1000, display: 'flex' }}>
                                        <Form.Input
                                            field={`${field}[name]`}
                                            label={`${field}.name`}
                                            style={{ width: 200, marginRight: 16 }}
                                        >
                                        </Form.Input>
                                        <Form.Select
                                            field={`${field}[role]`}
                                            label={`${field}.role`}
                                            style={{ width: 120 }}
                                            optionList={[
                                                { label: 'Engineer', value: 'Engineer' },
                                                { label: 'Designer', value: 'Designer' },
                                            ]}
                                        >
                                        </Form.Select>
                                        <Button
                                            type='danger'
                                            theme='borderless'
                                            icon={<IconMinusCircle />}
                                            onClick={remove}
                                            style={{ margin: 12 }}
                                        />
                                    </div>
                                ))
                            }
                        </React.Fragment>
                    )}
                </ArrayField>
                <ComponentUsingFormState />
            </Form>
        );
    }
}


export { ArrayFieldCollapseDemo, ArrayFieldDemo, ArrayFieldWithFormInitValues, ArrayFieldWithInitValue, ArrayFieldSetValues, AsyncSetArrayField };