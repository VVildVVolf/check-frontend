import React, { Fragment, ReactNode } from 'react';
import { CheckboxComponent } from '../../controls/CheckBox';
import { TabComponent } from '../../controls/Tab';
import "./NumbersPage.css"

interface INumbersPageState {
    get selectedTabIndex():number;
    get selectedTollIndex(): number;
}

export class NumbersPage extends React.Component<{}, INumbersPageState> {
    constructor(props: Readonly<{}>) {
        super(props);

        this.state = {selectedTabIndex: this.defaultSelectedIndex, selectedTollIndex: this.defaultTollIndex};

        this.handleChangeTab = this.handleChangeTab.bind(this);
        this.handleChangeRadioButton = this.handleChangeRadioButton.bind(this);
    }

    public render(): ReactNode {
        return (
        <div className="numbers-page container">
            <div className="row">
                <TabComponent onChange={this.handleChangeTab} tabsList={this.tabs} defaultSelected={this.state.selectedTabIndex}></TabComponent>
                <hr />
            </div>
            { this.state.selectedTabIndex === this.numbersTabIndex &&
            <Fragment>
                <div className="row toll">
                    <CheckboxComponent options={this.options} name="defaultName" onChange={this.handleChangeRadioButton} defaultCheckedIndex={this.state.selectedTollIndex}></CheckboxComponent>
                </div>
                <div className="top-buffer row">
                    <div className="card">
                        <div className="card-body">
                            Search by:
                        </div>
                    </div>
                </div>
                <div className="top-buffer row">
                    <div className="card">
                        <div className="card-body">
                            List
                        </div>
                    </div>
                </div>
            </Fragment>
            }

            <hr />
            <div className="row">
                <div className="alert alert-primary d-flex align-items-center" role="alert">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-exclamation-triangle-fill flex-shrink-0 me-2" viewBox="0 0 16 16" role="img" aria-label="Warning:">
                        <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
                    </svg>
                    <div>
                        {JSON.stringify({selectedTab: this.tabs[this.state.selectedTabIndex], selectedToll: this.options[this.state.selectedTollIndex]})}
                    </div>
                </div>
            </div>
            <hr />
        </div>);
    }


    private readonly tabs = ["Purchase Numbers", "My numbers", "Hosted messaging"];
    private readonly  options = ["10 DLC", "Toll free"];

    private readonly numbersTabIndex = 0;
    private readonly defaultSelectedIndex = this.numbersTabIndex;

    private readonly defaultTollIndex = 0;
    private handleChangeTab(selectedTabIndex: number): void {
        this.setState({selectedTabIndex: selectedTabIndex});
    }

    private handleChangeRadioButton(selectedIndex: number): void {
        this.setState({selectedTollIndex: selectedIndex});
    }

    private readonly defaultRadiobutton = 0;
}

export default NumbersPage;