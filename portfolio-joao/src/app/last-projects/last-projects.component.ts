import { Component } from '@angular/core';

@Component({
  selector: 'app-last-projects',
  templateUrl: './last-projects.component.html',
  styleUrls: ['./last-projects.component.css']
})
export class LastProjectsComponent {

  lastProjects: any[] = [ 
    {name:"Project 1", urlImagem:"https://img.freepik.com/psd-gratuitas/modelo-de-pagina-de-destino-de-conceito-de-negocio_23-2148712809.jpg?w=1060&t=st=1692099767~exp=1692100367~hmac=1d83579218f9c81c65825fb1e0dbae09c11468e701d7b9f49d0c406724747671"},
    {name:"Project 2", urlImagem:"https://img.freepik.com/psd-gratuitas/cor-do-modelo-da-pagina-de-destino-do-ano-2022_23-2149230149.jpg?w=1060&t=st=1692099808~exp=1692100408~hmac=b2654a28c3c6d2ef10159fa49b7a558bebebe22aaec68766b7ca56b87d5547b5"},
    {name:"Project 3", urlImagem:"https://img.freepik.com/vetores-premium/design-de-plano-de-fundo-abstrato-da-pagina-de-destino_475148-1907.jpg?w=826"},
    {name:"Project 4", urlImagem:"https://img.freepik.com/vetores-gratis/modelo-de-pagina-de-destino-de-bela-natureza_52683-60654.jpg?w=900&t=st=1692099871~exp=1692100471~hmac=b48f01df33cfb635b4eee0f242aeffe4c06f321fcd2c542cd91f0e094655cfd5"},
    {name:"Project 5", urlImagem:"https://img.freepik.com/psd-gratuitas/modelo-de-pagina-de-destino-de-festa-de-verao_23-2148481682.jpg?w=1060&t=st=1692099884~exp=1692100484~hmac=e517567c68d42bf34f20ec2b61590ef459cf962e9d8e5127b475f848aafcebcc"},
    {name:"Project 6", urlImagem:"https://img.freepik.com/vetores-gratis/modelo-de-pagina-de-destino-de-primavera-desenhado-a-mao_23-2149266059.jpg?w=900&t=st=1692100131~exp=1692100731~hmac=a01e594ca0f48da72b243101e35db7a39128f15300c8e7f7f6d3cf09fe835e34"},

  ];
  
}
