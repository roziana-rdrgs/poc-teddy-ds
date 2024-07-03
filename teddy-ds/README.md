
# ✨ Teddy Commom DS: Cross-Platform Design System ✨


Benefícios de utilizar um monorepo:
 - Código e visibilidade compartilhados
 - Mudanças atômicas
 - Uso de diferentes ferramentas e tecnologias
 - Conjunto único de dependências
 
[Nx - Gerenciador de Monorepos](https://www.npmjs.com/package/nx)

    npm i nx
    npx nx graph
![Visualização do Monorepo](https://amplified-iris-73c.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F99eb03c8-a238-4594-9f39-9e1991a92a0e%2Fb2c0dec2-f894-4a4d-b608-a30377d8cce8%2FUntitled.png?table=block&id=6ebcaa22-e682-4ac4-ae54-f2a19014fb43&spaceId=99eb03c8-a238-4594-9f39-9e1991a92a0e&width=1380&userId=&cache=v2) 

### Definindo o workspace com o Nx    
   

    --criando um workspace
	    npx --ignore-existing create-nx-workspace teddy-ds --preset=empty

    --criação dos projetos: libs, apps, etc
	    nx g @nx/angular:library teddy-ds-angular --directory libs/teddy-ds-angular
	    nx g @nx/react:library teddy-ds-react --directory libs/teddy-ds-react

	--instalando storybook
		nx g @nx/react:storybook-configuration teddy-ds-react
		nx g @nx/angular:storybook-configuration teddy-ds-angular
		
	    nx run teddy-ds-react:storybook

    
   
   ## Estrutura do projeto
    teddy-ds
    ├── libs                              
    │    ├── shared    
    │    	└── design-tokens
    │    	└── types
    │    └── teddy-ds-angular
    │    └── teddy-ds-react
       
	 
## Utilizando a lib
**Instalação:**

    npm i @roziana/commom-ds

**No seu projeto:
React**

    <Button
       size="small"
       title="Login"
     />

**Angular**

    <lib-teddy-ds-button [size]="'large'"></lib-teddy-ds-button>

### Considerações
  - Pontos positivos:
      - Conseguimos ter projetos separados mantendo as tecnologias que já são utilizadas e podendo reaproveitar as libs já existentes;
      - Estilizações em um só lugar;

  - Pontos negativos:
      - A lib como um todo pode se tornar um pouco "pesada" por conter as dependencias de todos os projetos;
      - Alterações feitas devem levar em consideração ambos os projetos;
