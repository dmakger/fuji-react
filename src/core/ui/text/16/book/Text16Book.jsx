import React from 'react';
import clDefault from "../_Text16.module.scss";
import clBook from "./_Text16Book.module.scss";

const Text16Book = ({className, children, ...props}) => {
    return (
        <span className={[clDefault.text, clBook.text, className].join(" ")} {...props}>{children}</span>
    );
};

export default Text16Book;