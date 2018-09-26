import { JsonController, Get, Param, Body, Post, HttpCode,CurrentUser,NotFoundError } from 'routing-controllers'
import Ticket ,{Comment} from './entities';
import User from '../users/entity'



@JsonController()
export default class TicketController {


  @Get('/Ticket/:id')
  getPage(
    @Param('id') id: number
  ) {
    return Ticket.findOne(id)
  }

  @Get('/Ticket')
  async allPages() {
    const tickets = await Ticket.find()
    return { tickets }

  }

  @Post('/Ticket')
  @HttpCode(201)
  createPage(
    @Body() tickets: Ticket
  ) {
    return tickets.save()
  }

  @Post('/comments/:id')
  @HttpCode(201)
  createPage(
    @Body() tickets: Ticket
  ) {
    return tickets.save()
  }
  
}
