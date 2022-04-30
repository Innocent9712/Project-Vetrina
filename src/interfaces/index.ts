/** Components */
export interface CardBodyProps {
    children: React.ReactNode
}

export interface CardTopInterface {
    icon: React.ReactNode;
    title: string;
    period?: string[];
}

export interface LinkOutInterface {
    text: string;
    icon?: React.ReactNode;
    linkColor: string;
}

export interface CardInterface {
    top: React.ReactNode;
    content?: React.ReactNode;
    bottom?: React.ReactNode;
}

/** Layout/Main */
export interface MainPropsInterface {
    sideState: boolean;
}
    /** ./Dashboard/Order */
export interface OrderContentTextInterface {
    title: string;
    value: React.ReactNode;
}

    /** ./Dashboard/Extension */
export interface ItemInterface {
    icon?: React.ReactNode;
    backColor: string;
    text: string;
    title?: string;
}

/** SideNav */
export type SubItemsType = Omit<DrawerList, 'icon'>
export interface DrawerList {
    name: string;
    icon: React.ReactNode
    subItems?: SubItemsType[];
    badge?: number;
    }
export interface NavPropsInterface {
    sideState: boolean;
    handleState: ()=> void;
}

/** Api Interface */
export interface ResponseInterface {
    title: string;
    img: string;
    description: string;
    url: string;
    readTime: string;
}