import type { Schema, Struct } from '@strapi/strapi';

export interface CalculatorAreaCalculatorComponent
  extends Struct.ComponentSchema {
  collectionName: 'components_calculator_area_calculator_components';
  info: {
    displayName: 'AreaCalculatorComponent';
  };
  attributes: {
    conversionParameter: Schema.Attribute.Float;
    from: Schema.Attribute.Enumeration<
      ['square feet', 'square inch', 'square meter']
    > &
      Schema.Attribute.Required;
    slug: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique;
    title: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique;
    to: Schema.Attribute.Enumeration<
      ['square feet', 'square inch', 'square meter']
    >;
  };
}

export interface CalculatorLengthCalculatorComponent
  extends Struct.ComponentSchema {
  collectionName: 'components_calculator_length_calculator_components';
  info: {
    description: '';
    displayName: 'LengthCalculatorComponent';
  };
  attributes: {
    conversionParameter: Schema.Attribute.Float;
    from: Schema.Attribute.Enumeration<
      [
        'meter',
        'kilometer',
        'nanometer',
        'centimeter',
        'micrometer',
        'decimeter',
        'millimeter',
        'picometer',
        'yard',
      ]
    > &
      Schema.Attribute.Required;
    slug: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique;
    title: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique;
    to: Schema.Attribute.Enumeration<
      [
        'meter',
        'kilometer',
        'nanometer',
        'centimeter',
        'micrometer',
        'decimeter',
        'millimeter',
        'picometer',
        'yard',
      ]
    > &
      Schema.Attribute.Required;
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

export interface SeoBreadcrumb extends Struct.ComponentSchema {
  collectionName: 'components_seo_breadcrumbs';
  info: {
    displayName: 'Breadcrumb';
  };
  attributes: {};
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

export interface SharedRichText extends Struct.ComponentSchema {
  collectionName: 'components_shared_rich_texts';
  info: {
    description: '';
    displayName: 'Markdown Editor';
    icon: 'align-justify';
  };
  attributes: {
    body: Schema.Attribute.RichText;
    title: Schema.Attribute.String;
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
      'calculator.area-calculator-component': CalculatorAreaCalculatorComponent;
      'calculator.length-calculator-component': CalculatorLengthCalculatorComponent;
      'calculator.result': CalculatorResult;
      'seo.breadcrumb': SeoBreadcrumb;
      'seo.meta-data': SeoMetaData;
      'seo.schema': SeoSchema;
      'seo.schema-data': SeoSchemaData;
      'shared.media': SharedMedia;
      'shared.rich-text': SharedRichText;
      'shared.text-editor': SharedTextEditor;
    }
  }
}
