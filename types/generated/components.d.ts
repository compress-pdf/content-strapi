import type { Schema, Struct } from '@strapi/strapi';

export interface CalculatorLengthConversion extends Struct.ComponentSchema {
  collectionName: 'components_calculator_length_conversions';
  info: {
    description: '';
    displayName: 'Length Conversion';
  };
  attributes: {
    conversionParameter: Schema.Attribute.Decimal;
    From: Schema.Attribute.Enumeration<
      ['centimeter', 'meter', 'kilometer', 'decimeter', 'millimeter']
    >;
    To: Schema.Attribute.Enumeration<
      ['centimeter', 'meter', 'kilometer', 'decimeter', 'millimeter']
    >;
  };
}

export interface CalculatorResult extends Struct.ComponentSchema {
  collectionName: 'components_calculator_results';
  info: {
    description: '';
    displayName: 'Result';
  };
  attributes: {
    content: Schema.Attribute.RichText;
  };
}

export interface ContentContentSections extends Struct.ComponentSchema {
  collectionName: 'components_content_content_sections';
  info: {
    displayName: 'content sections';
  };
  attributes: {
    title: Schema.Attribute.String;
  };
}

export interface ContentContentsWithEquation extends Struct.ComponentSchema {
  collectionName: 'components_content_contents_with_equations';
  info: {
    displayName: 'Contents with equation';
  };
  attributes: {
    title: Schema.Attribute.String;
  };
}

export interface SeoBreadcrumb extends Struct.ComponentSchema {
  collectionName: 'components_seo_breadcrumbs';
  info: {
    displayName: 'Breadcrumb';
  };
  attributes: {
    item: Schema.Attribute.Component<'shared.link', true>;
  };
}

export interface SeoMetaData extends Struct.ComponentSchema {
  collectionName: 'components_seo_meta_data';
  info: {
    description: '';
    displayName: 'MetaData';
  };
  attributes: {
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    imageAlt: Schema.Attribute.String & Schema.Attribute.Required;
    imageUrl: Schema.Attribute.Text & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SeoSchema extends Struct.ComponentSchema {
  collectionName: 'components_seo_schemata';
  info: {
    description: '';
    displayName: 'Schema';
  };
  attributes: {
    content: Schema.Attribute.Component<'seo.schema-data', true>;
  };
}

export interface SeoSchemaData extends Struct.ComponentSchema {
  collectionName: 'components_seo_schema_data';
  info: {
    description: '';
    displayName: 'SchemaData';
  };
  attributes: {
    schema: Schema.Attribute.JSON;
    schemaType: Schema.Attribute.Enumeration<
      ['person', 'website ', 'organization', 'article']
    >;
    title: Schema.Attribute.String;
  };
}

export interface SharedAds extends Struct.ComponentSchema {
  collectionName: 'components_shared_ads';
  info: {
    description: '';
    displayName: 'Ads';
  };
  attributes: {
    ad_script: Schema.Attribute.Relation<
      'oneToOne',
      'api::ad-script.ad-script'
    >;
    title: Schema.Attribute.String;
  };
}

export interface SharedLink extends Struct.ComponentSchema {
  collectionName: 'components_shared_links';
  info: {
    displayName: 'Link';
  };
  attributes: {
    title: Schema.Attribute.String & Schema.Attribute.Required;
    url: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedMedia extends Struct.ComponentSchema {
  collectionName: 'components_shared_media';
  info: {
    description: '';
    displayName: 'Media';
    icon: 'file-video';
  };
  attributes: {
    image: Schema.Attribute.Media<'images'>;
    title: Schema.Attribute.String;
  };
}

export interface SharedQuote extends Struct.ComponentSchema {
  collectionName: 'components_shared_quotes';
  info: {
    displayName: 'Quote';
    icon: 'indent';
  };
  attributes: {
    body: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface SharedRichText extends Struct.ComponentSchema {
  collectionName: 'components_shared_rich_texts';
  info: {
    description: '';
    displayName: 'Rich text';
    icon: 'align-justify';
  };
  attributes: {
    body: Schema.Attribute.RichText;
    title: Schema.Attribute.String;
  };
}

export interface SharedSlider extends Struct.ComponentSchema {
  collectionName: 'components_shared_sliders';
  info: {
    description: '';
    displayName: 'Slider';
    icon: 'address-book';
  };
  attributes: {
    files: Schema.Attribute.Media<'images', true>;
  };
}

export interface SharedTextEditor extends Struct.ComponentSchema {
  collectionName: 'components_shared_text_editors';
  info: {
    displayName: 'Text Editor';
  };
  attributes: {
    content: Schema.Attribute.RichText &
      Schema.Attribute.CustomField<
        'plugin::ckeditor.CKEditor',
        {
          output: 'HTML';
          preset: 'rich';
        }
      >;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'calculator.length-conversion': CalculatorLengthConversion;
      'calculator.result': CalculatorResult;
      'content.content-sections': ContentContentSections;
      'content.contents-with-equation': ContentContentsWithEquation;
      'seo.breadcrumb': SeoBreadcrumb;
      'seo.meta-data': SeoMetaData;
      'seo.schema': SeoSchema;
      'seo.schema-data': SeoSchemaData;
      'shared.ads': SharedAds;
      'shared.link': SharedLink;
      'shared.media': SharedMedia;
      'shared.quote': SharedQuote;
      'shared.rich-text': SharedRichText;
      'shared.slider': SharedSlider;
      'shared.text-editor': SharedTextEditor;
    }
  }
}
