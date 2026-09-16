# Desmistificando o track no Angular

Muitas vezes, ao trabalhar com projetos Angular, você já deve ter se deparado com a necessidade de rastrear itens em uma lista e se questionado sobre sua utilidade e impacto no desempenho da aplicação. Estou aqui para te ajudar com suas dúvidas e explorar a verdadeira função dessa ferramenta.

O principal propósito do rastreamento de itens é aprimorar o desempenho durante a renderização de listas no DOM. Por padrão, quando os dados em uma lista são modificados, o Angular pode perder a referência dos elementos anteriores e reconstruir todos os elementos da lista. Essa abordagem pode resultar em uma perda significativa de desempenho, especialmente em listas extensas.

Com a nova sintaxe de controle de fluxo, introduzida a partir do Angular 17, o `*ngFor` foi substituído pelo bloco `@for`. E diferente do `trackBy`, que era opcional no `*ngFor`, o `@for` **exige** que você defina uma expressão `track`, tornando o rastreamento de itens uma prática obrigatória e não mais um detalhe que passava despercebido por muitos desenvolvedores.

Quando os dados são atualizados, o Angular verifica a chave definida na expressão `track` para cada elemento. Se essa chave permanecer a mesma após a atualização, o Angular mantém a instância original do elemento, alterando apenas suas propriedades — exatamente como acontecia com o `trackBy`, mas agora de forma mais direta na sintaxe do template.

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

Ao invés de utilizar a referência do objeto como chave de rastreamento (o que seria inadequado, já que as referências dos objetos mudam a cada atualização), é possível utilizar a propriedade "id" como chave. Com o `@for`, isso é feito diretamente no template, sem a necessidade de criar uma função separada no componente:

```html
@for (item of items; track item.id) {
  <div>{{ item.name }}</div>
} @empty {
  <div>Nenhum item encontrado.</div>
}
```

Repare que não precisamos mais declarar uma função `trackByFn` no componente — a expressão `track item.id` já resolve isso de forma declarativa. Além disso, o `@for` traz de brinde o bloco `@empty`, que é renderizado automaticamente quando a lista está vazia, algo que antes exigia uma estrutura `*ngIf` adicional junto ao `*ngFor`.

Caso você não tenha uma propriedade única como "id" disponível, ainda é possível usar o índice como chave de rastreamento, embora isso traga os mesmos problemas de desempenho que existiam com o `trackBy` baseado em índice:

```html
@for (item of items; track $index) {
  <div>{{ item.name }}</div>
}
```

Vale destacar também outras variáveis de contexto que o `@for` disponibiliza automaticamente dentro do bloco, como `$index`, `$first`, `$last`, `$even` e `$odd`, sem precisar declará-las manualmente como no `*ngFor`:

```html
@for (item of items; track item.id) {
  <div [class.par]="$even">{{ $index + 1 }} - {{ item.name }}</div>
}
```

Agora, quando os dados são atualizados, o Angular utilizará a expressão `track` para determinar se uma instância do elemento deve ser mantida ou descartada, proporcionando o mesmo ganho significativo de desempenho que o `trackBy` oferecia — só que agora como parte obrigatória e nativa da sintaxe, o que ajuda a evitar que esse cuidado seja esquecido em projetos novos.
