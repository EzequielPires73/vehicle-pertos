import React, { useRef } from 'react';
import { SortableContainer, SortableElement } from 'react-sortable-hoc';
import { arrayMoveImmutable } from 'array-move';
import { Label } from './ui/label';
import { Button } from './ui/button';
import { api } from '@/services/api';
import { useParams } from 'next/navigation';

interface ImageItem {
    id: string;
    url: string;
}

export const VehicleGallery = ({ images, onChange }) => {
    const ref = useRef(null);
    const {id} = useParams();

    const uploadImages = async (files: FileList) => {
        const form = new FormData();
        const filesArray = Array.from(files);
        filesArray.forEach((file, index) => {
            form.append(`images`, file);
        });

        try {
            const {success, images} = await api.post(`vehicles/${id}/upload-images`, form).then(res => res.data);
    
            if(success) onChange(images);
        } catch (error) {
            console.error('Erro no upload:', error);
        }
    }
   
    const orderImages = async (files: Array<string>) => {
        try {
            const {success, images} = await api.post(`vehicles/${id}/order-images`, {images: files}).then(res => res.data);
    
            if(success) onChange(images);
        } catch (error) {
            console.error('Erro no upload:', error);
        }
    }

    const onSortEnd = ({ oldIndex, newIndex }: { oldIndex: number; newIndex: number }) => {
        const data = arrayMoveImmutable(images, oldIndex, newIndex);
        orderImages(data as Array<string>);
    };

    return (
        <div className="">
            <div className='flex items-center justify-between mb-4'>
                <Label>Galeria de imagens</Label>
                <input ref={ref} type="file" multiple onChange={(e) => e.target.files[0] && uploadImages(e.target.files)} className='hidden' id='gallery' />
                <Button
                    title='Selecionar foto'
                    buttonType='secondary'
                    onClick={() => ref.current.click()}
                    type='button'
                />
            </div>
            <SortableImageList images={images} onSortEnd={onSortEnd} axis="xy" />
        </div>
    );
};

interface SortableImageListProps {
    images: ImageItem[];
    onSortEnd: ({ oldIndex, newIndex }: { oldIndex: number; newIndex: number }) => void;
}

const SortableImageList = SortableContainer<SortableImageListProps>(({ images }) => {
    return (
        <div className="grid grid-cols-4 gap-2">
            {images.map((image, index) => (
                <SortableImage key={index} index={index} image={image} />
            ))}
        </div>
    );
});

interface SortableImageProps {
    image: ImageItem;
}

const SortableImage = SortableElement<SortableImageProps>(({ image }) => (
    <div className="h-[126px] rounded-xl overflow-hidden">
        <img src={process.env.NEXT_PUBLIC_URL_DEFAULT+image} alt={`Image`} className='object-cover w-full h-full' />
    </div>
));
