import { ClassProp } from 'class-variance-authority/types';
import { ComponentProps } from 'react';
import { ComponentPropsWithRef } from 'react';
import { DetailedHTMLProps } from 'react';
import { DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES } from 'react';
import { ForwardRefExoticComponent } from 'react';
import { HTMLAttributes } from 'react';
import { JSX as JSX_2 } from 'react/jsx-runtime';
import { RefAttributes } from 'react';
import { RefObject } from 'react';
import { VariantProps } from 'class-variance-authority';

export declare const Box: ForwardRefExoticComponent<Omit<Omit<DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "ref"> & {
ref?: ((instance: HTMLDivElement | null) => void | DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES[keyof DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES]) | RefObject<HTMLDivElement> | null | undefined;
}, "ref"> & RefAttributes<HTMLDivElement>>;

export declare type BoxProps = ComponentPropsWithRef<"div">;

export declare const Button: ForwardRefExoticComponent<Omit<ButtonProps, "ref"> & RefAttributes<HTMLButtonElement>>;

declare type ButtonProps = ComponentProps<"button"> & VariantProps<typeof buttonStyles>;

declare const buttonStyles: (props?: ({
    variant?: "solid" | "outline" | "ghost" | null | undefined;
    size?: "sm" | "md" | "lg" | null | undefined;
    colorscheme?: "primary" | null | undefined;
} & ClassProp) | undefined) => string;

export declare const Input: ForwardRefExoticComponent<Omit<InputProps, "ref"> & RefAttributes<HTMLInputElement>>;

declare type InputProps = ComponentProps<"input"> & VariantProps<typeof inputStyles>;

declare const inputStyles: (props?: ClassProp | undefined) => string;

export declare const Stack: ({ className, ...props }: StackProps) => JSX_2.Element;

declare type StackProps = BoxProps;

export { }
