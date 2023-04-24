import React from 'react';
import { isFunction } from 'lodash';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { stepsClasses as css } from '@douyinfe/semi-foundation/steps/constants';
import { IconTickCircle, IconAlertCircle, IconAlertTriangle } from '@douyinfe/semi-icons';

export type Status = 'wait' | 'process' | 'finish' | 'error' | 'warning';

export interface FillStepProps {
    description?: React.ReactNode;
    icon?: React.ReactNode;
    status?: Status;
    title?: React.ReactNode;
    className?: string;
    style?: React.CSSProperties;
    prefixCls?: string;
    stepNumber?: string;
    onChange?: () => void;
    onClick?: React.MouseEventHandler<HTMLDivElement>;
    onKeyDown?: React.KeyboardEventHandler<HTMLDivElement>;
    "role"?: React.AriaRole;
    "aria-label"?: React.AriaAttributes["aria-label"];
    // 以下参数用于 C2D, 用户请勿使用
    // The following parameters are used for C2D, users should not use them
    usedInC2D?: boolean
}

const FillStep = (props: FillStepProps) => {
    const { prefixCls, className, title, description, status, style, onClick, icon, onChange, stepNumber, onKeyDown } = props;
    const renderIcon = () => {
        let inner, progress;

        if ('icon' in props) {
            inner = icon;
        } else if ('status' in props) {
            switch (status) {
                case 'error':
                    inner = <IconAlertCircle size="extra-large" />;
                    break;
                case 'wait':
                    inner = stepNumber;
                    break;
                case 'process':
                    inner = stepNumber;
                    progress = true;
                    break;
                case 'finish':
                    inner = <IconTickCircle size="extra-large" />;
                    break;
                case 'warning':
                    inner = <IconAlertTriangle size="extra-large" />;
                    break;
                default:
                    inner = null;
                    break;
            }
        }
        const cls = classnames({
            [`${prefixCls}-left`]: true,
            [`${prefixCls}-icon`]: 'icon' in props,
            [`${prefixCls}-plain`]: !('icon' in props),
            [`${prefixCls}-icon-process`]: progress,
        });

        return inner ? <div className={cls}>{inner}</div> : null;
    };
    const handleClick = (e: React.MouseEvent) => {
        if (isFunction(onClick)) {
            onClick(e);
        }
        onChange();
    };
    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            if (isFunction(onKeyDown)) {
                onKeyDown(e);
            }
            onChange();
        }
    };
    return (
        <div
            role={props["role"]}
            aria-label={props["aria-label"]}
            aria-current="step"
            tabIndex={0} 
            className={classnames({
                [prefixCls]: true,
                [`${prefixCls}-${status}`]: Boolean(status),
                [`${prefixCls}-clickable`]: onClick,
                [`${prefixCls}-fill`]: props.usedInC2D,
            }, className)}
            style={style}
            onClick={e => {
                handleClick(e);
            }}
            onKeyDown={handleKeyDown}
        >
            {renderIcon()}
            <div className={`${prefixCls}-content`}>
                <div className={`${prefixCls}-title`} title={typeof title === 'string' ? title : null}>
                    <span className={`${prefixCls}-title-text`}>{title}</span>
                </div>
                <div
                    className={`${prefixCls}-description`}
                    title={typeof description === 'string' ? description : null}
                >
                    {description}
                </div>
            </div>
        </div>
    );
};

FillStep.propTypes = {
    prefixCls: PropTypes.string,
    description: PropTypes.node,
    icon: PropTypes.node,
    status: PropTypes.oneOf(['wait', 'process', 'finish', 'error', 'warning']),
    title: PropTypes.node,
    className: PropTypes.string,
    style: PropTypes.object,
    onClick: PropTypes.func,
};
FillStep.defaultProps = {
    prefixCls: css.ITEM,
    status: 'wait',
    className: '',
};


FillStep.elementType = 'Steps.FillStep';

export default FillStep;
