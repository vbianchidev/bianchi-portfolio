# Desmistificando o TrackBy no Angular

Muitas vezes, ao trabalhar com projetos Angular, você já deve ter se deparado com a função "trackBy" e se questionado sobre sua utilidade e impacto no desempenho da aplicação. Estou aqui para te ajudar com suas dúvidas e explorar a verdadeira função dessa ferramenta.

O principal propósito da função "trackBy" é aprimorar o desempenho durante a renderização de listas no DOM. Por padrão, quando os dados em uma lista (utilizando \*ngFor) são modificados, o Angular perde a referência dos elementos anteriores e reconstrói todos os elementos da lista. Essa abordagem pode resultar em uma perda significativa de desempenho, especialmente em listas extensas.

A função "trackBy" oferece a possibilidade de definir uma lógica personalizada para rastrear os elementos em uma lista. Quando os dados são atualizados, o Angular verifica a referência de cada elemento utilizando a função "trackBy". Se a referência de um elemento permanecer a mesma após a atualização, o Angular manterá a instância original do elemento, alterando apenas suas propriedades.

Vamos considerar o exemplo de uma lista com a interface "Item":

```typescript
interface Item {
  id: number;
  name: string;
}

items: Item[] = [
 {id: 1, name: 'Item 1'},
 {id: 2, name: 'Item 2'},
 {id: 3, name: 'Item 3'}
];
```

Ao invés de utilizar a referência do objeto como chave de rastreamento (o que seria inadequado, já que as referências dos objetos mudam a cada atualização), é possível utilizar a propriedade "id" como chave de rastreamento. Para isso, é necessário criar uma função "trackByFn" no componente:

```typescript
trackByFn(index: number, item: Item) {
  return item.id;
}
```

Em seguida, a nossa função "trackByFn" pode ser aplicada em um \*ngFor da seguinte maneira:

```html
<div *ngFor="let item of items; trackBy: trackByFn">{{ item.name }}</div>
```

Agora, quando os dados são atualizados, o Angular utilizará a função "trackByFn" para determinar se uma instância do elemento deve ser alterada ou descartada, proporcionando um ganho significativo de desempenho na manipulação de listas.
