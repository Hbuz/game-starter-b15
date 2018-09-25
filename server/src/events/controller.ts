import { JsonController, Get, Param, Body, Post, HttpCode } from 'routing-controllers'
import Event from './entities'


@JsonController()
export default class EventController {


  @Get('/events/:id')
  getPage(
    @Param('id') id: number
  ) {
    return Event.findOne(id)
  }

  @Get('/events')
  async allPages() {
    const events = await Event.find()
    return { events }

  }

  @Post('/events')
  @HttpCode(201)
  createPage(
    @Body() events: Event
  ) {
    return events.save()
  }



}


  