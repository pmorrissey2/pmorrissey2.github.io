var wms_layers = [];


        var lyr_OpenTopoMap_0 = new ol.layer.Tile({
            'title': 'OpenTopoMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.opentopomap.org/{z}/{x}/{y}.png'
            })
        });
var format_Zombie_1 = new ol.format.GeoJSON();
var features_Zombie_1 = format_Zombie_1.readFeatures(json_Zombie_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Zombie_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Zombie_1.addFeatures(features_Zombie_1);
var lyr_Zombie_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Zombie_1, 
                style: style_Zombie_1,
                interactive: true,
                title: '<img src="styles/legend/Zombie_1.png" /> Zombie'
            });
var format_CantonNEParcels_2 = new ol.format.GeoJSON();
var features_CantonNEParcels_2 = format_CantonNEParcels_2.readFeatures(json_CantonNEParcels_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CantonNEParcels_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CantonNEParcels_2.addFeatures(features_CantonNEParcels_2);
var lyr_CantonNEParcels_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CantonNEParcels_2, 
                style: style_CantonNEParcels_2,
                interactive: true,
                title: '<img src="styles/legend/CantonNEParcels_2.png" /> Canton NE Parcels'
            });

lyr_OpenTopoMap_0.setVisible(true);lyr_Zombie_1.setVisible(true);lyr_CantonNEParcels_2.setVisible(true);
var layersList = [lyr_OpenTopoMap_0,lyr_Zombie_1,lyr_CantonNEParcels_2];
lyr_Zombie_1.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'TIN': 'TIN', 'PIN': 'PIN', 'Subdivisio': 'Subdivisio', 'Acreage': 'Acreage', 'PlatBook': 'PlatBook', 'PlatPage': 'PlatPage', 'TaxYear': 'TaxYear', 'AnnoScale': 'AnnoScale', 'LegalDesc': 'LegalDesc', 'AcctNumber': 'AcctNumber', 'AcctName1': 'AcctName1', 'AcctName2': 'AcctName2', 'MailAddr1': 'MailAddr1', 'MailAddr2': 'MailAddr2', 'MailAddr3': 'MailAddr3', 'MailCity': 'MailCity', 'MailState': 'MailState', 'MailZipCod': 'MailZipCod', 'MarketValu': 'MarketValu', 'AssessedVa': 'AssessedVa', 'PropertyRe': 'PropertyRe', 'Class': 'Class', 'PriorLandV': 'PriorLandV', 'PriorSpeci': 'PriorSpeci', 'PriorDefer': 'PriorDefer', 'PriorBuild': 'PriorBuild', 'PriorObxfV': 'PriorObxfV', 'PriorTotal': 'PriorTotal', 'LandValue': 'LandValue', 'SpecialLan': 'SpecialLan', 'DeferredVa': 'DeferredVa', 'BuildingVa': 'BuildingVa', 'ObxfValue': 'ObxfValue', 'SaleDeedBo': 'SaleDeedBo', 'SaleDeedPa': 'SaleDeedPa', 'SaleDeedDa': 'SaleDeedDa', 'CompleteAd': 'CompleteAd', 'Real_ID_Li': 'Real_ID_Li', 'Tax_Check': 'Tax_Check', 'Tax_Link': 'Tax_Link', 'CantonZoni': 'CantonZoni', 'CantonLand': 'CantonLand', });
lyr_CantonNEParcels_2.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'ParcelType': 'ParcelType', 'Map': 'Map', 'SubMap': 'SubMap', 'Block': 'Block', 'Parcel': 'Parcel', 'ParcelSuff': 'ParcelSuff', 'Lot': 'Lot', 'Tract': 'Tract', 'TIN': 'TIN', 'TINNoSpace': 'TINNoSpace', 'LandDistri': 'LandDistri', 'LandLot': 'LandLot', 'UniqueID': 'UniqueID', 'PIN': 'PIN', 'Subdivisio': 'Subdivisio', 'Acreage': 'Acreage', 'YearCreate': 'YearCreate', 'PlatBook': 'PlatBook', 'PlatPage': 'PlatPage', 'HistoricCa': 'HistoricCa', 'GlobalID': 'GlobalID', 'Temp1': 'Temp1', 'TaxYear': 'TaxYear', 'LegalDesc': 'LegalDesc', 'LandUnits': 'LandUnits', 'AcctNumber': 'AcctNumber', 'AcctName1': 'AcctName1', 'AcctName2': 'AcctName2', 'MailAddr1': 'MailAddr1', 'MailAddr2': 'MailAddr2', 'MailAddr3': 'MailAddr3', 'MailCity': 'MailCity', 'MailState': 'MailState', 'MailZipCod': 'MailZipCod', 'MarketValu': 'MarketValu', 'AssessedVa': 'AssessedVa', 'PropertyRe': 'PropertyRe', 'Property_I': 'Property_I', 'Class': 'Class', 'AlternateP': 'AlternateP', 'Neighborho': 'Neighborho', 'LandValue': 'LandValue', 'BuildingVa': 'BuildingVa', 'ObxfValue': 'ObxfValue', 'SaleDeedBo': 'SaleDeedBo', 'SaleDeedPa': 'SaleDeedPa', 'Owner': 'Owner', 'CompleteAd': 'CompleteAd', 'City': 'City', 'PriorDefer': 'PriorDefer', 'UnitsType': 'UnitsType', 'PropAddr_H': 'PropAddr_H', 'PropAddr_S': 'PropAddr_S', 'PropAddr_1': 'PropAddr_1', 'PropAddr_2': 'PropAddr_2', 'PriorLandV': 'PriorLandV', 'PriorSpeci': 'PriorSpeci', 'PriorBuild': 'PriorBuild', 'PriorObxfV': 'PriorObxfV', 'PriorTotal': 'PriorTotal', 'SpecialLan': 'SpecialLan', 'DeferredVa': 'DeferredVa', 'PropAddr_U': 'PropAddr_U', 'SaleDeedDa': 'SaleDeedDa', 'Zoning': 'Zoning', 'AnnoScale': 'AnnoScale', });
lyr_Zombie_1.set('fieldImages', {'OBJECTID': 'TextEdit', 'TIN': 'TextEdit', 'PIN': 'TextEdit', 'Subdivisio': 'TextEdit', 'Acreage': 'TextEdit', 'PlatBook': 'TextEdit', 'PlatPage': 'TextEdit', 'TaxYear': 'TextEdit', 'AnnoScale': 'TextEdit', 'LegalDesc': 'TextEdit', 'AcctNumber': 'TextEdit', 'AcctName1': 'TextEdit', 'AcctName2': 'TextEdit', 'MailAddr1': 'TextEdit', 'MailAddr2': 'TextEdit', 'MailAddr3': 'TextEdit', 'MailCity': 'TextEdit', 'MailState': 'TextEdit', 'MailZipCod': 'TextEdit', 'MarketValu': 'TextEdit', 'AssessedVa': 'TextEdit', 'PropertyRe': 'TextEdit', 'Class': 'TextEdit', 'PriorLandV': 'TextEdit', 'PriorSpeci': 'TextEdit', 'PriorDefer': 'TextEdit', 'PriorBuild': 'TextEdit', 'PriorObxfV': 'TextEdit', 'PriorTotal': 'TextEdit', 'LandValue': 'TextEdit', 'SpecialLan': 'TextEdit', 'DeferredVa': 'TextEdit', 'BuildingVa': 'TextEdit', 'ObxfValue': 'TextEdit', 'SaleDeedBo': 'TextEdit', 'SaleDeedPa': 'TextEdit', 'SaleDeedDa': 'DateTime', 'CompleteAd': 'TextEdit', 'Real_ID_Li': 'TextEdit', 'Tax_Check': 'TextEdit', 'Tax_Link': 'TextEdit', 'CantonZoni': 'TextEdit', 'CantonLand': 'TextEdit', });
lyr_CantonNEParcels_2.set('fieldImages', {'OBJECTID': 'TextEdit', 'ParcelType': 'TextEdit', 'Map': 'TextEdit', 'SubMap': 'TextEdit', 'Block': 'TextEdit', 'Parcel': 'TextEdit', 'ParcelSuff': 'TextEdit', 'Lot': 'TextEdit', 'Tract': 'TextEdit', 'TIN': 'TextEdit', 'TINNoSpace': 'TextEdit', 'LandDistri': 'TextEdit', 'LandLot': 'TextEdit', 'UniqueID': 'TextEdit', 'PIN': 'TextEdit', 'Subdivisio': 'TextEdit', 'Acreage': 'TextEdit', 'YearCreate': 'DateTime', 'PlatBook': 'TextEdit', 'PlatPage': 'TextEdit', 'HistoricCa': 'TextEdit', 'GlobalID': 'TextEdit', 'Temp1': 'TextEdit', 'TaxYear': 'TextEdit', 'LegalDesc': 'TextEdit', 'LandUnits': 'TextEdit', 'AcctNumber': 'TextEdit', 'AcctName1': 'TextEdit', 'AcctName2': 'TextEdit', 'MailAddr1': 'TextEdit', 'MailAddr2': 'TextEdit', 'MailAddr3': 'TextEdit', 'MailCity': 'TextEdit', 'MailState': 'TextEdit', 'MailZipCod': 'TextEdit', 'MarketValu': 'TextEdit', 'AssessedVa': 'TextEdit', 'PropertyRe': 'TextEdit', 'Property_I': 'TextEdit', 'Class': 'TextEdit', 'AlternateP': 'TextEdit', 'Neighborho': 'TextEdit', 'LandValue': 'TextEdit', 'BuildingVa': 'TextEdit', 'ObxfValue': 'TextEdit', 'SaleDeedBo': 'TextEdit', 'SaleDeedPa': 'TextEdit', 'Owner': 'TextEdit', 'CompleteAd': 'TextEdit', 'City': 'TextEdit', 'PriorDefer': 'TextEdit', 'UnitsType': 'TextEdit', 'PropAddr_H': 'TextEdit', 'PropAddr_S': 'TextEdit', 'PropAddr_1': 'TextEdit', 'PropAddr_2': 'TextEdit', 'PriorLandV': 'TextEdit', 'PriorSpeci': 'TextEdit', 'PriorBuild': 'TextEdit', 'PriorObxfV': 'TextEdit', 'PriorTotal': 'TextEdit', 'SpecialLan': 'TextEdit', 'DeferredVa': 'TextEdit', 'PropAddr_U': 'TextEdit', 'SaleDeedDa': 'DateTime', 'Zoning': 'TextEdit', 'AnnoScale': 'TextEdit', });
lyr_Zombie_1.set('fieldLabels', {'OBJECTID': 'no label', 'TIN': 'no label', 'PIN': 'no label', 'Subdivisio': 'no label', 'Acreage': 'no label', 'PlatBook': 'no label', 'PlatPage': 'no label', 'TaxYear': 'no label', 'AnnoScale': 'no label', 'LegalDesc': 'no label', 'AcctNumber': 'no label', 'AcctName1': 'no label', 'AcctName2': 'no label', 'MailAddr1': 'no label', 'MailAddr2': 'no label', 'MailAddr3': 'no label', 'MailCity': 'no label', 'MailState': 'no label', 'MailZipCod': 'no label', 'MarketValu': 'no label', 'AssessedVa': 'no label', 'PropertyRe': 'no label', 'Class': 'no label', 'PriorLandV': 'no label', 'PriorSpeci': 'no label', 'PriorDefer': 'no label', 'PriorBuild': 'no label', 'PriorObxfV': 'no label', 'PriorTotal': 'no label', 'LandValue': 'no label', 'SpecialLan': 'no label', 'DeferredVa': 'no label', 'BuildingVa': 'no label', 'ObxfValue': 'no label', 'SaleDeedBo': 'no label', 'SaleDeedPa': 'no label', 'SaleDeedDa': 'no label', 'CompleteAd': 'no label', 'Real_ID_Li': 'no label', 'Tax_Check': 'no label', 'Tax_Link': 'no label', 'CantonZoni': 'no label', 'CantonLand': 'no label', });
lyr_CantonNEParcels_2.set('fieldLabels', {'OBJECTID': 'no label', 'ParcelType': 'no label', 'Map': 'no label', 'SubMap': 'no label', 'Block': 'no label', 'Parcel': 'no label', 'ParcelSuff': 'no label', 'Lot': 'no label', 'Tract': 'no label', 'TIN': 'no label', 'TINNoSpace': 'no label', 'LandDistri': 'no label', 'LandLot': 'no label', 'UniqueID': 'no label', 'PIN': 'no label', 'Subdivisio': 'no label', 'Acreage': 'no label', 'YearCreate': 'no label', 'PlatBook': 'no label', 'PlatPage': 'no label', 'HistoricCa': 'no label', 'GlobalID': 'no label', 'Temp1': 'no label', 'TaxYear': 'no label', 'LegalDesc': 'no label', 'LandUnits': 'no label', 'AcctNumber': 'no label', 'AcctName1': 'no label', 'AcctName2': 'no label', 'MailAddr1': 'no label', 'MailAddr2': 'no label', 'MailAddr3': 'no label', 'MailCity': 'no label', 'MailState': 'no label', 'MailZipCod': 'no label', 'MarketValu': 'no label', 'AssessedVa': 'no label', 'PropertyRe': 'no label', 'Property_I': 'no label', 'Class': 'no label', 'AlternateP': 'no label', 'Neighborho': 'no label', 'LandValue': 'no label', 'BuildingVa': 'no label', 'ObxfValue': 'no label', 'SaleDeedBo': 'no label', 'SaleDeedPa': 'no label', 'Owner': 'no label', 'CompleteAd': 'no label', 'City': 'no label', 'PriorDefer': 'no label', 'UnitsType': 'no label', 'PropAddr_H': 'no label', 'PropAddr_S': 'no label', 'PropAddr_1': 'no label', 'PropAddr_2': 'no label', 'PriorLandV': 'no label', 'PriorSpeci': 'no label', 'PriorBuild': 'no label', 'PriorObxfV': 'no label', 'PriorTotal': 'no label', 'SpecialLan': 'no label', 'DeferredVa': 'no label', 'PropAddr_U': 'no label', 'SaleDeedDa': 'no label', 'Zoning': 'no label', 'AnnoScale': 'no label', });
lyr_CantonNEParcels_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});