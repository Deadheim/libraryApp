import {ChangeEvent, Dispatch, SetStateAction} from "react";

export type IntroInputType = {
    value: string,
    onChange: (event: ChangeEvent<HTMLInputElement>) => void;
    placeholder: string,
    setEnabled: (value: boolean) => void,
    setPage: Dispatch<SetStateAction<number>>

}

export type IntroButtonType = {
    onClick: () => void;
}

export type BookDataType = {
    data: DocsType[] |undefined,
    isFetching: boolean,
    isError: boolean,
    isPending: boolean,
    page: number,
    isPlaceholderData: boolean,
    setPage: Dispatch<SetStateAction<number>>,
}

export type BookItemType = {
    id: string,
    src: string | undefined,
    alt?: string,
    children?: string,
    name: string,
    text: string,
}

export type ReadButtonType = {
    onClick: () => void;
    children: string,
}

export type PagButtonType = {
    children: string;
    disabled: boolean;
    onClick: () => void;
}