/* eslint-disable max-len */
import React from 'react';
import cls from 'classnames';
import PropTypes from 'prop-types';
import { noop, get, isFunction, omit } from 'lodash';
import { cssClasses, numbers } from '@douyinfe/semi-foundation/popconfirm/constants';
import PopconfirmFoundation, { PopconfirmAdapter } from '@douyinfe/semi-foundation/popconfirm/popconfirmFoundation';
import { IconClose, IconAlertTriangle } from '@douyinfe/semi-icons';
import BaseComponent from '../_base/baseComponent';
import Popover, { PopoverProps } from '../popover';
import { Position, Trigger, RenderContentProps, TooltipProps } from '../tooltip';
import Button, { ButtonProps } from '../button';
import { Type as ButtonType } from '../button/Button';
import ConfigContext, { ContextValue } from '../configProvider/context';
import LocaleConsumer from '../locale/localeConsumer';
import { Locale as LocaleObject } from '../locale/interface';
import '@douyinfe/semi-foundation/popconfirm/popconfirm.scss';
import { BASE_CLASS_PREFIX } from '@douyinfe/semi-foundation/base/constants';
import { Motion } from '../_base/base';

export interface PopconfirmProps extends PopoverProps {
    cancelText?: string;
    cancelButtonProps?: CancelButtonProps;
    cancelType?: ButtonType;
    content?: TooltipProps['content'];
    defaultVisible?: boolean;
    disabled?: boolean;
    icon?: React.ReactNode;
    okText?: string;
    okType?: ButtonType;
    okButtonProps?: OkButtonProps;
    motion?: Motion;
    title?: React.ReactNode;
    visible?: boolean;
    prefixCls?: string;
    zIndex?: number;
    trigger?: Trigger;
    position?: Position;
    onCancel?: (e: React.MouseEvent) => void;
    onConfirm?: (e: React.MouseEvent) => void;
    onVisibleChange?: (visible: boolean) => void;
    onClickOutSide?: (e: React.MouseEvent) => void;
}

export interface PopconfirmState {
    visible: boolean;
}

export interface CancelButtonProps extends ButtonProps {
    initialFocus?: boolean;
}

export interface OkButtonProps extends ButtonProps {
    initialFocus?: boolean;
}

interface PopProps {
    [x: string]: any;
}

export default class Popconfirm extends BaseComponent<PopconfirmProps, PopconfirmState> {
    static contextType = ConfigContext;
    static propTypes = {
        motion: PropTypes.oneOfType([PropTypes.bool, PropTypes.func, PropTypes.object]),
        disabled: PropTypes.bool,
        content: PropTypes.oneOfType([PropTypes.node, PropTypes.func]),
        title: PropTypes.any,
        prefixCls: PropTypes.string,
        className: PropTypes.string,
        style: PropTypes.object,
        icon: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
        okText: PropTypes.string,
        okType: PropTypes.string,
        cancelText: PropTypes.string,
        cancelType: PropTypes.string,
        onCancel: PropTypes.func,
        onConfirm: PropTypes.func,
        onClickOutSide: PropTypes.func,
        onVisibleChange: PropTypes.func,
        visible: PropTypes.bool,
        defaultVisible: PropTypes.bool,
        okButtonProps: PropTypes.object,
        cancelButtonProps: PropTypes.object,
        stopPropagation: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
        zIndex: PropTypes.number,
        // private
        trigger: PropTypes.string,
        position: PropTypes.string,
    };

    static defaultProps = {
        stopPropagation: true,
        trigger: 'click',
        // position: 'bottomLeft',
        onVisibleChange: noop,
        disabled: false,
        icon: <IconAlertTriangle size="extra-large" />,
        okType: 'primary',
        cancelType: 'tertiary',
        prefixCls: cssClasses.PREFIX,
        zIndex: numbers.DEFAULT_Z_INDEX,
        onCancel: noop,
        onConfirm: noop,
        onClickOutSide: noop,
    };

    constructor(props: PopconfirmProps) {
        super(props);

        this.state = {
            visible: props.defaultVisible || false,
        };

        this.foundation = new PopconfirmFoundation(this.adapter);
    }

    context: ContextValue;

    static getDerivedStateFromProps(props: PopconfirmProps, state: PopconfirmState) {
        const willUpdateStates: Partial<PopconfirmState> = {};
        const { hasOwnProperty } = Object.prototype;

        if (hasOwnProperty.call(props, 'visible')) {
            willUpdateStates.visible = props.visible;
        }

        return willUpdateStates;
    }

    get adapter(): PopconfirmAdapter<PopconfirmProps, PopconfirmState> {
        return {
            ...super.adapter,
            setVisible: (visible: boolean): void => this.setState({ visible }),
            notifyConfirm: (e: React.MouseEvent): void => this.props.onConfirm(e),
            notifyCancel: (e: React.MouseEvent): void => this.props.onCancel(e),
            notifyVisibleChange: (visible: boolean): void => this.props.onVisibleChange(visible),
            notifyClickOutSide: (e: React.MouseEvent) => this.props.onClickOutSide(e),
        };
    }

    handleCancel = (e: React.MouseEvent): void => this.foundation.handleCancel(e && e.nativeEvent);

    handleConfirm = (e: React.MouseEvent): void => this.foundation.handleConfirm(e && e.nativeEvent);

    handleVisibleChange = (visible: boolean): void => this.foundation.handleVisibleChange(visible);

    handleClickOutSide = (e: React.MouseEvent) => this.foundation.handleClickOutSide(e);

    stopImmediatePropagation = (e: React.SyntheticEvent): void => e && e.nativeEvent && e.nativeEvent.stopImmediatePropagation();

    renderControls = ({ initialFocusRef }: { initialFocusRef: RenderContentProps<Button>['initialFocusRef'] }) => {
        const { okText, cancelText, okType, cancelType, cancelButtonProps, okButtonProps, prefixCls } = this.props;
        const cancelInitialFocus = get(cancelButtonProps, 'initialFocus');
        const okInitialFocus = get(okButtonProps, 'initialFocus');
        const omitCancelButtonProps = omit(cancelButtonProps, 'initialFocus');
        const omitOkButtonProps = omit(okButtonProps, 'initialFocus');
        return (
            <LocaleConsumer componentName="Popconfirm">
                {(locale: LocaleObject['Popconfirm'], localeCode: string) => (
                    <>
                        <Button
                            type={cancelType} 
                            onClick={this.handleCancel} 
                            ref={cancelInitialFocus ? initialFocusRef : null}
                            {...omitCancelButtonProps}
                            className={
                                cls(omitCancelButtonProps.className, {
                                    [`${BASE_CLASS_PREFIX}-button-initial-focus`]: cancelInitialFocus,
                                })
                            }
                        >
                            {cancelText || get(locale, 'cancel')}
                        </Button>
                        <Button
                            type={okType}
                            theme="solid"
                            onClick={this.handleConfirm}
                            ref={okInitialFocus ? initialFocusRef : null}
                            {...omitOkButtonProps}
                            className={
                                cls(omitOkButtonProps.className, {
                                    [`${BASE_CLASS_PREFIX}-button-initial-focus`]: okInitialFocus,
                                })
                            }
                        >
                            {okText || get(locale, 'confirm')}
                        </Button>
                    </>
                )}
            </LocaleConsumer>
        );
    }

    renderConfirmPopCard = ({ initialFocusRef }: { initialFocusRef: RenderContentProps<any>['initialFocusRef'] }) => {
        const { content, title, className, style, cancelType, icon, prefixCls } = this.props;
        const { direction } = this.context;
        const popCardCls = cls(
            prefixCls,
            className,
            {
                [`${prefixCls}-rtl`]: direction === 'rtl',
            }
        );
        const showTitle = title !== null && typeof title !== 'undefined';
        const showContent = content !== null || typeof content !== 'undefined';

        return (
            /* eslint-disable-next-line jsx-a11y/no-static-element-interactions */
            <div className={popCardCls} onClick={this.stopImmediatePropagation} style={style}>
                <div className={`${prefixCls}-inner`}>
                    <div className={`${prefixCls}-header`}>
                        <i className={`${prefixCls}-header-icon`}>
                            {React.isValidElement(icon) ? icon : null}
                        </i>
                        <div className={`${prefixCls}-header-body`}>
                            {showTitle ? <div className={`${prefixCls}-header-title`}>{title}</div> : null}
                            {showContent ? <div className={`${prefixCls}-header-content`}>
                                {isFunction(content) ? content({ initialFocusRef }) : content}
                            </div> : null}
                        </div>
                        <Button
                            className={`${prefixCls}-btn-close`}
                            icon={<IconClose />}
                            size="small"
                            theme={'borderless'}
                            type={cancelType}
                            onClick={this.handleCancel}
                        />
                    </div>
                    <div className={`${prefixCls}-footer`}>{this.renderControls({ initialFocusRef })}</div>
                </div>
            </div>
        );
    }

    render() {
        // rtl changes the default position
        const { direction } = this.context;
        const defaultPosition = direction === 'rtl' ? 'bottomRight' : 'bottomLeft';
        const {
            className,
            prefixCls,
            disabled,
            children,
            style,
            position = defaultPosition,
            ...attrs
        } = this.props;

        if (disabled) {
            return children;
        }

        const { visible } = this.state;
        const popProps: PopProps = {
            onVisibleChange: this.handleVisibleChange,
            className: cssClasses.POPOVER,
            onClickOutSide: this.handleClickOutSide,
        };

        if (this.isControlled('visible')) {
            popProps.trigger = 'custom';
        }

        return (
            <Popover
                {...attrs}
                content={this.renderConfirmPopCard}
                visible={visible}
                position={position}
                {...popProps}
            >
                {children}
            </Popover>
        );
    }
}
