import React from "react";
import MasterLayout from '../../components/layout/MasterLayout'
import applicationsConfig from "./applications.config";

function Applications () {
    return (
        <MasterLayout 
            title={applicationsConfig.title}
            taskbarTabs={true}
            tabsConfig={{
                tabs: applicationsConfig.tabs,
                defaultTab: 'all',
                position: 'top',
                size: 'large',
                theme: 'light'
            }}
            items={applicationsConfig.items}
        >
            {applicationsConfig.items.map((item, index) => (
                <p key={index}>Hello World 2</p>
            ))}
            
        </MasterLayout>
    );
}

export default Applications;