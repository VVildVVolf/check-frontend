import React from "react";
import { ReactNode } from "react";

export interface ITabComponentProps {
    onChange?: (index: number) => void;
    defaultSelected?: number;
    tabsList: string[];
}

interface ITabComponentState {
    selected: number;
}

export class TabComponent extends React.Component<ITabComponentProps, ITabComponentState> {
    constructor(props: ITabComponentProps) {
        super(props);
        this.state = { selected: props.defaultSelected ? props.defaultSelected : 0 };

        this.handleClick = this.handleClick.bind(this);
    }

    public render():ReactNode {
        const selected = this.state.selected;
        const items = this.props.tabsList.map((v,i) => (
            <li key={v} className="nav-item">
                <button className={"nav-link" + (i === selected ? " active" : "")} aria-current="page" onClick={(_:any) => this.handleClick(i)}>{v}</button>
            </li>
        ));
        return <ul className="nav nav-pills">{items}</ul>;
    }

    private handleClick(selected: number): void{
        if (this.props.onChange) {
            this.setState({selected: selected});
            this.props.onChange(selected);
        }
    }
}