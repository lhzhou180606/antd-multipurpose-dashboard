import {Projects} from "../../../../types";
import {CardProps, Descriptions, DescriptionsProps, Space, Tooltip, Typography} from "antd";
import {CalendarOutlined, ClockCircleOutlined, UsergroupAddOutlined} from "@ant-design/icons";

import "./styles.css";
import {Card} from "../../../index.ts";

type Props = {
    project: Projects
    size?: "small" | "default"
} & CardProps

const ProjectsCard = (props: Props) => {
    const {
        size,
        project:
            {
                client_name,
                end_date,
                project_duration,
                project_manager,
                project_name,
                project_type,
                project_location,
                priority,
                team_size,
                status
            },
        ...others
    } = props

    const items: DescriptionsProps['items'] = [
        {
            key: '1',
            label: 'Manager',
            children: project_manager,
        },
        {
            key: '1',
            label: 'Client',
            children: client_name,
        },
        {
            key: '2',
            label: 'Type',
            children: <Typography.Text style={{textTransform: 'capitalize'}}>{project_type}</Typography.Text>,
        },
        {
            key: '3',
            label: 'Location',
            children: project_location,
        },
        {
            key: '5',
            label: 'Priority',
            children: <Typography.Text style={{textTransform: 'capitalize'}}>{priority}</Typography.Text>,
        },
        {
            key: '6',
            label: 'Status',
            children: <Typography.Text style={{textTransform: 'capitalize'}}>{status}</Typography.Text>,
        },
    ];

    return (
        size === "small" ?
            <Card title={`${project_name.slice(0, 15)}...`} className="project-small-card" {...others}>
                <Space direction="vertical">
                    <Typography.Text>Owner: {project_manager}</Typography.Text>
                    <Typography.Text>Client: {client_name}</Typography.Text>
                    <Typography.Text>Priority: {priority}</Typography.Text>
                    <Typography.Text>Type: {project_type}</Typography.Text>
                    <Typography.Text>Location: {project_location}</Typography.Text>
                </Space>
            </Card> :
            <Card
                title={project_name}
                hoverable={true}
                actions={[
                    <Tooltip title="Team size">
                        <Space>
                            <UsergroupAddOutlined/>
                            <Typography.Text>{team_size}</Typography.Text>
                        </Space>
                    </Tooltip>,
                    <Tooltip title="Project duration (months)">
                        <Space>
                            <ClockCircleOutlined/>
                            <Typography.Text>{project_duration}</Typography.Text>
                        </Space>
                    </Tooltip>,
                    <Tooltip title="Project end date">
                        <Space>
                            <CalendarOutlined/>
                            <Typography.Text>{end_date}</Typography.Text>
                        </Space>
                    </Tooltip>
                ]}
                {...others}
            >
                <Descriptions
                    items={items}
                    column={{xxl: 2, xl: 2, lg: 2, md: 1, sm: 1, xs: 1}}
                />
            </Card>

    );
};

export default ProjectsCard;
