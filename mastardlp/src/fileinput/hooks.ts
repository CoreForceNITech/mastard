import { ChangeEventHandler, useRef, useState } from 'react';
import { imageDisplaySize } from './style';

const fileImage = new Image();
export const useHooks = () => {
    const imageContainerRef = useRef<HTMLDivElement>(null);
    const [objectURL, setObjectURL] = useState('');
    const manipulateImageSize = (url: string) => {
        fileImage.src = url;
        fileImage.onload = () => {
            const width = fileImage.naturalWidth;
            const height = fileImage.naturalHeight;
            const ratioWidth = width / imageDisplaySize.width;
            const ratioHeight = height / imageDisplaySize.height;
            if (ratioWidth > ratioHeight) {
                fileImage.width = imageDisplaySize.width;
                fileImage.height = height / ratioWidth;
            } else {
                fileImage.width = width / ratioHeight;
                fileImage.height = imageDisplaySize.height;
            }
        };
    };
    const resetSelection = () => {
        fileImage.src = '';
        const imageContainer = imageContainerRef.current;
        if (imageContainer && fileImage.parentNode === imageContainer) {
            imageContainer.removeChild(fileImage);
        }
        if (objectURL) {
            window.URL.revokeObjectURL(objectURL);
            setObjectURL('');
        }
    };
    const handleFiles: ChangeEventHandler<HTMLInputElement> = (event) => {
        const files = event.currentTarget.files;
        resetSelection();
        if (!files || files?.length === 0) return;
        const file = files[0];
        if (!file.type.includes('image/')) {
            event.currentTarget.value = '';
            return;
        }
        const imageContainer = imageContainerRef.current;
        if (!imageContainer) return;
        const objectURL = window.URL.createObjectURL(file);
        manipulateImageSize(objectURL);
        imageContainer.appendChild(fileImage);
        setObjectURL(objectURL);
    };
    return { handleFiles, imageContainerRef };
};