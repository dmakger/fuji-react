import {useEffect} from "react";

export default function useOutsideAlerter(ref, setIsVisible) {
    useEffect(() => {
        function handleOutsideClick(e) {
            if (ref.current && !ref.current.contains(e.target)) {
                setIsVisible(false);
            }
        }

        document.addEventListener("click", handleOutsideClick);
        return () => document.removeEventListener("click", handleOutsideClick);
    }, [ref, setIsVisible]);
}