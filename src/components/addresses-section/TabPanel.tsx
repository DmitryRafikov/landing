import Tab from "./Tab";

const TabPanel = (addresses: any) => {
    return (
        <ul className={"tab-panel"}>
            {
                addresses.map((address: any, index: number) => {
                    return (
                        <Tab
                            label={address.name}
                        />
                    )
                })
            }
        </ul>
    );
};