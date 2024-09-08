import React from 'react';

type ButtonProps = {
    title: string,
    onClick?: () => void,
    style?: string,
}

export const Button = ({title, onClick, style}: ButtonProps) => {
    return (
        <button onClick={onClick} className={style || 'todo-btn'}>{title}</button>
    );
};