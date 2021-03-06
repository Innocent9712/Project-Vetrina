/** Components */
export interface CardBodyProps {
    children: React.ReactNode;
    // sx?: {[key: string]: any}
    sx?: {
        paper?: any;
        stack?: any;
    }
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
    font?: string;
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
    path?: string;
    }

export    interface SubItems {
        icon:  React.ReactNode;
        title: string;
        subItems: SubItemsType[];
        subHandleClick: (name: string, path: string) => void;
        activePage: string;
      }
export interface NavPropsInterface {
    sideState: boolean;
    handleState: ()=> void;
    headerText?: string;
    changeHeader?: (name: string, path: string) => void;
}

/** Api Interface */
export interface ResponseInterface {
    title: string;
    img: string;
    description: string;
    url: string;
    readTime: string;
}