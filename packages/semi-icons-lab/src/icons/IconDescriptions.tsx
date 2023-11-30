import * as React from 'react';
import { convertIcon } from '../components/Icon';
function SvgComponent(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            focusable={false}
            aria-hidden={true}
            {...props}
        >
            <rect x={2.75} y={2.75} width={18.5} height={18.5} rx={3} fill="white" stroke="#AAB2BF" strokeWidth={1.5} />
            <rect x={5} y={6} width={4} height={2} fill="#AAB2BF" />
            <rect x={5} y={11} width={4} height={2} fill="#AAB2BF" />
            <rect x={5} y={16} width={2} height={2} fill="#AAB2BF" />
            <rect x={11} y={11} width={4} height={2} fill="#324350" />
            <rect x={11} y={16} width={8} height={2} fill="#324350" />
            <rect x={11} y={6} width={8} height={2} fill="#324350" />
        </svg>
    );
}
const IconComponent = convertIcon(SvgComponent, 'descriptions');
export default IconComponent;
