import type { UserConfig } from '@commitlint/types';
import { RuleConfigSeverity } from '@commitlint/types';

const Configuration: UserConfig =  {
    extends : ['@commit/config-conventionnal'],
    rules: {
        'scope-empty': [RuleConfigSeverity.Error, 'never'],
    },
}
export default Configuration;