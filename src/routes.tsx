import React from 'react';
import NumbersPage from './pages/Numbers/NumbersPage';
import MessagingPage from './pages/Messaging/MessagingPage';
import ReportingPage from './pages/Reporting/ReportingPage';
import ApiKeysPage from './pages/ApiKeys/ApiKeysPage';

interface IPageDescription {
    get Path(): string;
    // todo: define the type
    get Component(): any;
    get VisiblePhrase(): string;
    get flaticonClass(): string;
}

const NumbersRoute: IPageDescription = {
    Path: "/numbers",
    Component: <NumbersPage></NumbersPage>,
    VisiblePhrase: "Numbers",
    flaticonClass: "flaticon flaticon-phone-keyboard-buttons"
}

const MessagingRoute: IPageDescription = {
    Path: "/messaging",
    Component: <MessagingPage></MessagingPage>,
    VisiblePhrase: "Messaging",
    flaticonClass: "flaticon flaticon-message"
}

const ReportingRoute: IPageDescription = {
    Path: "/reporting",
    Component: <ReportingPage></ReportingPage>,
    VisiblePhrase: "Reporting",
    flaticonClass: "flaticon flaticon-check-list"
}

const ApiKeysRoute: IPageDescription = {
    Path: "/apiKeys",
    Component: <ApiKeysPage></ApiKeysPage>,
    VisiblePhrase: "API Keys",
    flaticonClass: "flaticon flaticon-door-key"
}

const routes: IPageDescription[] = [ NumbersRoute, MessagingRoute, ReportingRoute, ApiKeysRoute];
const defaultPage: IPageDescription = NumbersRoute;

export type { IPageDescription };
export { routes, defaultPage };