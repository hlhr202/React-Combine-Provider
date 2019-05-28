import * as React from 'react';

type IProviderOrWithValue<T = any> =
  | React.ComponentType<T>
  | [React.ComponentType<T>, T];

export const combineProviders = (providers: Array<IProviderOrWithValue>) => {
  return ({ children }: React.PropsWithChildren<{ value?: any[] }>) => {
    return providers.reduce<React.ReactElement<React.ProviderProps<any>>>(
      (tree, ProviderOrWithValue) => {
        if (Array.isArray(ProviderOrWithValue)) {
          const [Provider, value] = ProviderOrWithValue;
          return <Provider {...value}>{tree}</Provider>;
        } else {
          return <ProviderOrWithValue>{tree}</ProviderOrWithValue>;
        }
      },
      children as React.ReactElement
    );
  };
};
