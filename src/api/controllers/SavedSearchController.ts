import { Get, JsonController, Delete, Put, Post, Param, Body} from 'routing-controllers';
import { ConfigurationService } from '../services/ConfigurationService';
import { Configuration } from '../models/Configuration';

@JsonController('/v1/search')
export class SavedSearchController {

    constructor(
        private configurationService: ConfigurationService
    ) { }

    @Get()
    public find(): Promise<any> {
        return this.configurationService.find();
    }

    @Get('/:id')
    public getById(@Param('id') id: string): Promise<any> {
        return this.configurationService.findById(id);
    }

    @Delete('/:id')
    public delete(@Param('id') id: string): Promise<any> {
        return this.configurationService.delete(id);
    }


    @Post()
    public post(@Body() body: Configuration): Promise<any> {
        return this.configurationService.create(body);
    }

    @Put('/:id')
    public update(@Param('id') id: string,
    @Body() body: Configuration): Promise<any> {
        return this.configurationService.update(id, body);
    }

}
