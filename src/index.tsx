import * as React from 'react';

export const combineProviders = (providers: Array<React.ComponentType<any>>) => {
  return ({ children, value }: React.PropsWithChildren<{ value?: any[] }>) =>
    providers.reduce<React.ReactElement<React.ProviderProps<any>>>(
      (tree, Provider, index) => (
        <Provider value={value ? value[index] : undefined}>{tree}</Provider>
      ),
      children as React.ReactElement
    );
};
