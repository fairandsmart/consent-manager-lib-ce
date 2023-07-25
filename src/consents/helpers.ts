import { RecordDto } from '../records';
import { ConsentContext } from './interfaces';
import { ConsentOrigin, ModelEntryDto } from '../models';

export class ConsentHelper {
  static generateContextFromRecord(entry: ModelEntryDto, record: RecordDto, lang = entry.defaultLanguage): ConsentContext {
    return {
      language: lang,
      subject: record.subject,
      object: record.object,
      origin: ConsentOrigin.USER,
      layoutData: {
        info: '',
        blocs: [{parent: {location: '', key: entry.key!}}],
        type: 'layout',
      }
    }
  }
}

