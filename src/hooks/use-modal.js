import React from "react";


export const  useModal  = () => {
    const [isopen, setIsopen] = React.useState(false)
    const open = () => setIsopen (true);
    const close = () => setIsopen (false)
    return {isopen, open, close}
}