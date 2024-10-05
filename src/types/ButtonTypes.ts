import { ReactNode } from "react";

export type ButtonTypes ={
    name:string;
    type:'button'|'submit'|'reset';
    onClick?:()=>void;
    className?:string;
    icon?: ReactNode;
}