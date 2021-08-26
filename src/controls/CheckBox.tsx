import React from "react";
import { Fragment } from "react";

export interface ICheckboxComponentProps {
    // TODO: implement generic options, possibly key-value paired
    options: string[];
    defaultCheckedIndex?: number;
    onChange?:(index:number) => void;
    name?: string;
}

export class CheckboxComponent extends React.Component<ICheckboxComponentProps> {
    constructor(props: ICheckboxComponentProps) {
        super(props);

        this.handleChange = this.handleChange.bind(this);
    }

    public render() {
        const checkedIndex = this.props.defaultCheckedIndex ? this.props.defaultCheckedIndex : 0;
        const items = this.props.options.map((item, index) => <Fragment key={item}>
            <input type="radio" value={index} className="btn-check" name={this.props.name} id={this.props.name + item} autoComplete="off" defaultChecked={index == checkedIndex} />
            <label className="btn btn-outline-primary" htmlFor={this.props.name + item}>{item}</label>
        </Fragment>);
        return (
        <div>
            <div className="btn-group" role="group" aria-label="Basic radio toggle button group" onChange={this.handleChange}>
                {items}
            </div>
        </div>);
    }

    private handleChange(e: any):void {
        if (this.props.onChange) {
            let selectedIndex = e.target.value as number
            this.props.onChange(selectedIndex);
        }
    }
}
