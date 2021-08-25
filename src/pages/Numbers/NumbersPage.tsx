import React, { ReactNode } from 'react';
import { TabComponent } from '../../controls/Tab';
import "./NumbersPage.css"

interface INumbersPageState {
    get selectedTabIndex():number;
}

export class NumbersPage extends React.Component<{}, INumbersPageState> {
    constructor(props: Readonly<{}>) {
        super(props);

        this.state = {selectedTabIndex: this.defaultSelectedIndex};

        this.handleChaneTab = this.handleChaneTab.bind(this);
    }

    public render(): ReactNode {
        const tabs = ["Purchase Numbers", "My numbers", "Hosted messaging"];

        return (
        <div className="numbers-page container">
            <div className="row">
                <TabComponent onChange={this.handleChaneTab} tabsList={tabs} defaultSelected={this.defaultSelectedIndex}></TabComponent>
                <hr />
            </div>
            { this.state.selectedTabIndex === this.numbersTabIndex &&
            <div className="row">
                <div className="btn-group" role="group" aria-label="Basic radio toggle button group">
                    <input type="radio" className="btn-check" name="btnradio" id="btnradio1" defaultChecked />
                    <label className="btn btn-outline-primary" >10 DLC</label>

                    <input type="radio" className="btn-check" name="btnradio" id="btnradio2" />
                    <label className="btn btn-outline-primary" >Toll free</label>
                </div>
            </div>
            }
            {this.state.selectedTabIndex === this.numbersTabIndex &&
            <div className="top-buffer row">
                <div className="card">
                    <div className="card-body">
                        Search by:
                    </div>
                </div>
            </div>
            }
            {this.state.selectedTabIndex === this.numbersTabIndex &&
            <div className="top-buffer row">
                <div className="card">
                    <div className="card-body">
                        List
                    </div>
                </div>
            </div>
            }
        </div>);
    }

    private readonly numbersTabIndex = 0;
    private readonly defaultSelectedIndex = this.numbersTabIndex;
    private handleChaneTab(selectedTabIndex: number): void {
        this.setState({selectedTabIndex: selectedTabIndex});
    }
}

export default NumbersPage;