import { WalletService } from "../services/WalletService";
import { Request } from "express";

export class WalletController 
{
  constructor (
    readonly service: WalletService
  ) {}

  async create( 
    
    )
  {
  }

  // @Get("/")
  // async get(@Body() user: any)
  // {
  //   const { name, password } = user;
  //   const token = await this.service.login(name, password);
  //   return { token };
  // }

  // @Delete("/")
  // async delete(@Body() user: {id: string, name: string, password: string})
  // {
  //   const { id, name, password } = user;
  //   const token = await this.service.delete(id, name, password);
  //   return { token };
  // }

  // @Get("/:id")
  // @Auth()
  // async findOne(@Params() params: { id: string }, req: Request, res: Response) {
  //   return { message: `Usuário com ID ${params.id}` };
  // }

  // @Put("/:id")
  // @Auth()
  // async update(
  //   @Params() params: { id: string },
  //   @Body() body: { name: string; email: string },
  //   req: Request,
  //   res: Response
  // ) {
  //   return { message: `Usuário ${params.id} atualizado com sucesso`, data: body };
  // }

  // @Delete("/:id")
  // @Auth()
  // async delete(@Params() params: { id: string }, req: Request, res: Response) {
  //   return { message: `Usuário ${params.id} excluído com sucesso` };
  // }
}