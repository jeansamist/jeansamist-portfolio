import { FunctionComponent } from 'react';

export type MetadataProps = {};

export const Metadata: FunctionComponent<MetadataProps> = () => {
  return (
    <>
      <link rel="icon" href="/favicon.ico" />
      <meta name="description" content="BAHA Ephraim's Portfolio" />
      <meta name="keywords" content="Portfolio, BAHA, Jeansamist" />
      <meta name="author" content="BAHA Ephraim" />
    </>
  );
}