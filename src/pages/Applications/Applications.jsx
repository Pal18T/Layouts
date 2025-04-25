import React from "react";
import MasterLayout from '../../components/layout/MasterLayout'
import applicationsConfig from "./applications.config";
import DataViewCard from "./components/DataViewCard";

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
            Card={<DataViewCard></DataViewCard>}
        >
            {/* <div className="flex flex-row flex-wrap">
            {
                applicationsConfig.items.map((item, index) => (
                    <div className="max-w-2xl p-2">
                        <DataViewCard></DataViewCard>
                    </div>
                ))
            }
            </div> */}
            
            
        </MasterLayout>
    );
}

export default Applications;