export const applyScaleOnHover = (element: Element, scaleFactor: number) => {
    const baseSize = element.getAttribute('r');
    if(!baseSize) throw new Error("Element has no size");
    element
        .addEventListener('mouseover',
            () => element.setAttribute('r', (parseFloat(baseSize) * scaleFactor).toString())
        );
    element
        .addEventListener('mouseout',
            () => element.setAttribute('r', baseSize)
        );
    return element;
}