import React from 'react';
import { Table, Space } from '@douyinfe/semi-ui';

App.storyName = 'word break - normal table';
export default function App() {
    const columns = [
        {
            title: '标题',
            dataIndex: 'name',
            width: 300,
        },
        {
            title: '所有者',
            dataIndex: 'owner',
        },
        {
            title: '大小',
            dataIndex: 'size',
        },
        {
            title: '更新日期',
            dataIndex: 'updateTime',
            width: 300,
        },
    ];
    const data = [
        {
            key: '1',
            name: 'Maintained by the Douyin front-end and UED teams, an easy-to-customize modern design system that helps designers and developers create high-quality products.',
            nameIconSrc: 'https://lf3-static.bytednsdoc.com/obj/eden-cn/ptlz_zlp/ljhwZthlaukjlkulzlp/figma-icon.png',
            size: '2M',
            owner: 'Jiang_Pengzhi_Jiang_Pengzhi_Jiang_Pengzhi_Jiang_Pengzhi_Jiang_Pengzhi_Jiang_Pengzhi_Jiang_Pengzhi_Jiang_Pengzhi',
            updateTime: '2020-02-02 05:13',
            avatarBg: 'grey',
        },
        {
            key: '2',
            name: 'Semi is designed based on FA architecture, and the main logic is extracted as Foundation package, which is easy to migrate to other frameworks',
            nameIconSrc: 'https://lf3-static.bytednsdoc.com/obj/eden-cn/ptlz_zlp/ljhwZthlaukjlkulzlp/docs-icon.png',
            size: '2M',
            owner: 'Jiang_Pengzhi_Jiang_Pengzhi_Jiang_Pengzhi_Jiang_Pengzhi_Jiang_Pengzhi_Jiang_Pengzhi_Jiang_Pengzhi_Jiang_Pengzhi',
            updateTime: '2020-02-02 05:13',
            avatarBg: 'red',
        },
        {
            key: '3',
            name: '由抖音前端与 UED 团队维护，易于定制的现代化设计系统，帮助设计师与开发者打造高质量产品。由抖音前端与 UED 团队维护，易于定制的现代化设计系统，帮助设计师与开发者打造高质量产品。',
            nameIconSrc: 'https://lf3-static.bytednsdoc.com/obj/eden-cn/ptlz_zlp/ljhwZthlaukjlkulzlp/docs-icon.png',
            size: '34KB',
            owner: 'LiveCode 允许你使用在线代码编辑器即时演示你的 UI 组件 LiveCode 允许你使用在线代码编辑器即时演示你的 UI 组件 LiveCode 允许你使用在线代码编辑器即时演示你的 UI 组件',
            updateTime: '2020-02-02 05:13',
            avatarBg: 'light-blue',
        },
        {
            key: '4',
            name: '由抖音前端与 UED 团队维护，易于定制的现代化设计系统，帮助设计师与开发者打造高质量产品。由抖音前端与 UED 团队维护，易于定制的现代化设计系统，帮助设计师与开发者打造高质量产品。',
            nameIconSrc: 'https://lf3-static.bytednsdoc.com/obj/eden-cn/ptlz_zlp/ljhwZthlaukjlkulzlp/docs-icon.png',
            size: '34KB',
            owner: 'LiveCode 允许你使用在线代码编辑器即时演示你的 UI 组件 LiveCode 允许你使用在线代码编辑器即时演示你的 UI 组件 LiveCode 允许你使用在线代码编辑器即时演示你的 UI 组件',
            updateTime: '2020-02-02 05:13',
            avatarBg: 'light-blue',
        },
    ];

    return (
        <Space vertical align='start'>
            <div>
                <h4>宽度 800</h4>
                <Table style={{ width: 800 }} columns={columns} dataSource={data} pagination={false} />
            </div>
            <div>
                <h4>无宽度</h4>
                <Table columns={columns} dataSource={data} pagination={false} />
            </div>
        </Space>
    );
}