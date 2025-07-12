import { useEffect, useState } from "react";

export const SvgLogo = ({color, width, height, className}) => {
    const [svgContent, setSvgContent] = useState('');

    useEffect(() => {
        fetch(`${import.meta.env.BASE_URL}/logo.svg`)
        .then((res) => res.text())
        .then((text) => {
            setSvgContent(
                text
                .replace(/fill="[^"]*"/gi, 'fill="currentColor"')
                .replace(/\swidth="[^"]*"/, '')
                .replace(/\sheight="[^"]*"/, '')
            );
        })
        .catch(console.error);
    }, [color, width, height, className]);

    return (
        <div
            className={`d-flex align-items-center justify-content-center ${className}`}
            style={{width, height, color}}
            dangerouslySetInnerHTML={{__html: svgContent}}
        />
    );
};