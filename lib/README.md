# Fair&Smart Right Consents TypeScript support

This project implements TypeScript definitions and API helpers for the [Fair&Smart Right Consents API](https://cmback.dev.env.fairandsmart.tech/swagger-ui/). It's meant for use in [Right Consents Front-end](https://github.com/fairandsmart/consent-manager-lib-ce), but should be general enough to use in any project. The code is maintained and based on the [Right Consents Back-end](https://github.com/fairandsmart/consent-manager-back) API resources and models, to be as close as possible to the true representation of the resources.

# Preleminary note to developpers

Before mergin into master, please ensure you:
* updated `version` in `package-lib.json`
* run `npm run pack`
* embed in your MR what has been changed under lib/, _bundles/, docs/


# NPM/Node version

Known to work using node v14.21.3 (npm v6.14.18).
Use NVM to force version if needed.

# Install

```
npm i @fairandsmart/consents-ce
```

# Interfaces and Enums

All the interface type definitions and enums are for type info only - everything will compile out. Only the API helpers produce real JavaScript output. You can import types from each service defined on [the API](https://cmback.dev.env.fairandsmart.tech/swagger-ui/):

```typescript
import { ModelVersionDtoLight, ModelsResource } from '@fairandsmart/consents-ce/models';
```


# API Helpers

In addition to the types, there are also simple helper functions for each API endpoint. They define the inputs and outputs to that endpoint, and will call a user-provided function with HTTP request info that you can then use to make an HTTP request. This pattern was used so the API helpers could provide full type information. These helpers are not a full API client - they assist in building one. An example:

```typescript
import { RcHttpClientConfig } from '@fairandsmart/consents-ce';

function http(config: RcHttpClientConfig): Observable<ModelEntryDto> {
    // fill in the API key, handle OAuth, etc., then make an HTTP request using the config.
    return fromFetch(config.url, ...);
}

// Use either as an observable

ModelsResource.getEntry(entryId).subscribe((modelEntry: ModelEntryDto) => {
    ...  
});

// ... or a promise using the .toPromise method

const modelEntry: ModelEntryDto = await ModelsResource.getEntry(entryId).toPromise();
```

Note that the API Helpers all return Observables and not promises. Feel free to adapt the behavior as you see fit.

To setup the helpers properly, see the Initialization section below.


# Initialization

*Note: this is not required if you only want to use the library for type descriptions*

If you wish to use the API helpers, you need to initialize the library in your project:

```typescript
import { RightConsents } from '@fairandsmart/consents-ce';

RightConsents.init({
    apiRoot: 'http://localhost:4287',
    httpClient: myCustomHttpClient // see API Helpers for more details
})
```

You need to provide the endpoint at which the API is available, and a custom HttpClient to handle all the requests.


# Imports

It is possible to import all services from `@fairandsmart/consent-manager` directly, but it's better to use the direct import:

```typescript
// good
import { getEntry } from '@fairandsmart/consents-ce/models';
getEntry(...);

// works, but not as good. Use for disambiguity if needed
import { ModelsResources } from '@fairandsmart/consents-ce';
ModelsResources.getEntry(...);
```

# Model Helpers

Some imports also contains helpers for parsing and interpreting the resources:

```typescript
import { map } from 'rxjs';
import { ModelEntryDto, ModelEntryHelper, getEntry } from '@fairandsmart/consents-ce/models';

getEntry(modelId).pipe(
    map((entry: ModelEntryDto) => ModelEntryHelper.getActiveVersion(entry))
).subscribe((activeVersion) => {
    // ModelEntryHelper is an object with static methods to help you parse the entry. 
    // In this example, you can find the active version of a model
    ... 
});
```

# Build

```
# build
npm run build
# pack for local import
npm run pack
# install local version in a different project
npm i {lib-repository}/lib/fairandsmart-consents-ce-{VERSION}.tgz
```

# Contribute 

- Create a branch for your work (PRD-XXX)
- Upgrade the version in the package-lib.json
- Add your work
- Run `.build.sh` and push 
- Create a new merge request


