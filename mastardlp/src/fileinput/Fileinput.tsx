import { FC } from 'react';
import { useHooks } from './hooks';
import { styles } from './style';

export const FileInput: FC = () => {
    const { handleFiles, imageContainerRef } = useHooks();
    return (
        <div>
            <input type="file" accept="image/*" onChange={handleFiles} />
            <div ref={imageContainerRef} style={{ ...styles.imageContainer }} />
        </div>
    );
};