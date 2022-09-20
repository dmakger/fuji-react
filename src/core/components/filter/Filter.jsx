import React, {useEffect, useRef, useState} from 'react';
import cl from './_Filter.module.scss';
import arrowDownSVG from '../../static/img/arrow-down-fill-white.svg'

import Text16B from "../../ui/text/16/bold/Text16B";
import FilterItem from "./core/components/FilterItem";


function useOutsideAlerter(ref, setIsVisibleFilter) {
    useEffect(() => {
        function handleOutsideClick(e) {
            if (ref.current && !ref.current.contains(e.target)) {
                setIsVisibleFilter(false);
            }
        }

        document.addEventListener("click", handleOutsideClick);
        return () => document.removeEventListener("click", handleOutsideClick);
    }, [ref, setIsVisibleFilter]);
}

const Filter = ({list, defaultValue, setDefaultValue, className, ...props}) => {
    const filterItemName = 'filterItem'
    const [isVisibleFilter, setIsVisibleFilter] = useState(false)

    const handleClickFilter = (e) => {
        e.preventDefault()
        setIsVisibleFilter(!isVisibleFilter)
    }

    const handleClickFilterItem = (e) => {
        for (let i = 0; i < list.length; i++) {
            if (list[i].id === e.target.id) {
                setDefaultValue(list[i])
            }
        }
        setIsVisibleFilter(false)
    }

    const box = useRef(null);
    useOutsideAlerter(box, setIsVisibleFilter);

    return (
        <form ref={box} className={[cl.select, className].join(" ")} {...props}>
            <div className={cl.selectTitle} data-default={defaultValue.id} onClick={handleClickFilter}>
                <Text16B>{defaultValue.name}</Text16B>
                <img src={arrowDownSVG} alt='icon' className={cl.selectTitleImage}/>
            </div>
            <div className={[cl.selectContent, isVisibleFilter ? "" : cl.selectContentActive].join(" ")}>
                {list.map(item =>
                    <FilterItem key={item.id} title={item.name} id={item.id} nameInput={filterItemName}
                                onClick={handleClickFilterItem} activeId={defaultValue.id}/>
                )}
            </div>
        </form>
    );
};

export default Filter;