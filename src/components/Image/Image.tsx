import { FC } from 'react';

interface Image {
  src: string;
  alt: string;
}

const Image: FC<Image> = ({ alt, src }) => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '25vh',
        padding: 16,
      }}
    >
      <img
        style={{
          maxWidth: '100%',
          maxHeight: '100%',
          margin: '0 auto',
        }}
        alt={alt}
        src={src}
      />
    </div>
  );
};

export { Image };
