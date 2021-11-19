import { useEffect, useRef } from 'react'

export const useDidMountEffect = (func, deps) => {
    const didMount = useRef(true)

    useEffect(() => {
        if (didMount.current) {
            didMount.current = false
        } else {
            func()
        }
    }, deps)
}