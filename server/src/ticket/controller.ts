import { JsonController, Get, Param, Body, Post, HttpCode } from 'routing-controllers'
import Ticket from './entities'


@JsonController()
export default class TicketController {


  @Get('/Ticket/:id')
  getPage(
    @Param('id') id: number
  ) {
    return Event.findOne(id)
  }

  @Get('/Ticket')
  async allPages() {
    const events = await Event.find()
    return { events }

  }

  @Post('/Ticket')
  @HttpCode(201)
  createPage(
    @Body() events: Event
  ) {
    return events.save()
  }



}
