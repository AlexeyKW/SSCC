var panorama1, panorama2, panorama3, panorama4, panorama5, panorama6, panorama7, viewer, container, infospot, font;

container = document.querySelector( '#container' );

function createTextShape ( message, size = 10, count ) {
        message = makeMultiLine( message, count );
        var shapes = font.generateShapes( message, size );
        var geometry = new THREE.ShapeGeometry( shapes );
        var matLite = new THREE.MeshBasicMaterial( {
          color: 0xffffff,
          transparent: true,
          opacity: 1,
          side: THREE.DoubleSide
        } );
        geometry.computeBoundingBox();
        var xMid = - 0.5 * ( geometry.boundingBox.max.x - geometry.boundingBox.min.x );
        geometry.translate( xMid, 0, 0 );
        return new THREE.Mesh( geometry, matLite );
}
function makeMultiLine ( text = '', count = 40 ) {
        let lineCharacterLimit = 0;
        return text.split(' ').map( word => {
          lineCharacterLimit += word.length;
          if ( lineCharacterLimit > count ) {
            word += '\n';
            lineCharacterLimit = 0;
          }
          return word;
        }).join(' ').replace( /\n /g, '\n' );
}

panorama1 = new PANOLENS.ImagePanorama( './asset/PIC_1.jpg' );
panorama2 = new PANOLENS.ImagePanorama( './asset/PIC_2.jpg' );
panorama3 = new PANOLENS.ImagePanorama( './asset/PIC_3.jpg' );
panorama4 = new PANOLENS.ImagePanorama( './asset/PIC_5.jpg' );
panorama5 = new PANOLENS.ImagePanorama( './asset/PIC_4.jpg' );
panorama6 = new PANOLENS.ImagePanorama( './asset/PIC_6.jpg' );
panorama7 = new PANOLENS.ImagePanorama( './asset/PIC_7.jpg' );

viewer = new PANOLENS.Viewer( {output: 'console', container: container});
viewer.add( panorama1, panorama2, panorama3, panorama4, panorama5, panorama6, panorama7);

panorama1.link( panorama2, new THREE.Vector3( -4635.99, -1205.27, 1415.84 ) );

panorama1.addEventListener( 'enter-fade-start', function(){
  viewer.tweenControlCenter( new THREE.Vector3(-4635.99, -1205.27, 1415.84), 0 );
} );

panorama2.link( panorama1, new THREE.Vector3( -2767.75, -2648.87, -3205.68 ) );
panorama2.link( panorama3, new THREE.Vector3( 4917.30, -800.99, -331.96 ) );
panorama2.link( panorama7, new THREE.Vector3( 3149.57, -604.98, 3822.35 ) );
panorama2.link( panorama4, new THREE.Vector3( -3499.77, -1272.48, 3324.58 ) );

panorama2.addEventListener( 'enter-fade-start', function(){
  viewer.tweenControlCenter( new THREE.Vector3(4326.99, -1203.03, 2180.06), 0 );
} );

panorama3.link( panorama2, new THREE.Vector3( 4632.48, -347.73, -1826.91 ) );

panorama3.addEventListener( 'enter-fade-start', function(){
  viewer.tweenControlCenter( new THREE.Vector3(-4731.51, -591.88, 1483.18), 0 );
} );

panorama4.link( panorama2, new THREE.Vector3( -4545.06, -443.96, -2030.81 ) );
panorama4.link( panorama5, new THREE.Vector3( 4375.14, -598.81, 2324.00 ) );
panorama4.link( panorama6, new THREE.Vector3( 1878.26, -263.14, -4616.33 ) );

panorama4.addEventListener( 'enter-fade-start', function(){
  viewer.tweenControlCenter( new THREE.Vector3(4433.41, -269.31, 2274.01), 0 );
} );

panorama5.link( panorama2, new THREE.Vector3( -4589.36, -253.76, -1949.54 ) );
panorama5.link( panorama4, new THREE.Vector3( -1497.49, -4318.36, -2017.84 ) );
panorama5.link( panorama6, new THREE.Vector3( 1931.83, -290.78, -4594.60 ) );

panorama5.addEventListener( 'enter-fade-start', function(){
  viewer.tweenControlCenter( new THREE.Vector3(4414.17, -544.28, 2261.57), 0 );
} );

panorama6.link( panorama4, new THREE.Vector3( -3644.39, -361.37, -3396.93 ) );
panorama6.link( panorama5, new THREE.Vector3( -3995.43, -360.21, -2977.78 ) );

panorama6.addEventListener( 'enter-fade-start', function(){
  viewer.tweenControlCenter( new THREE.Vector3(2606.47, -537.85, 4222.12), 0 );
} );

panorama7.link( panorama2, new THREE.Vector3( -4882.51, -748.95, -723.613 ) );

panorama7.addEventListener( 'enter-fade-start', function(){
  viewer.tweenControlCenter( new THREE.Vector3(4697.35, -525.09, -1609.26), 0 );
} );

radius = 1500;
var loader = new THREE.FontLoader();
var info_p2_1, info_p6_1, info_p8_1, info_p9_1, info_p9_2, info_p10_1, info_p11_1, info_p13_1_1, info_p13_1_2, info_p13_2_1, info_p13_4_1, info_p13_4_2, info_p13_4_3, info_p13_4_4, info_p14_1_1, info_p14_1_2, info_p14_1_3, info_p15_2_1, info_p15_2_2;

loader.load( './fonts/tbi.json', onFontLoaded );
function onFontLoaded ( _font ) {
        font = _font;

p3_t1 = createLabel('Конференц-зал', 0.7, 170);
//panorama3.add( p3_t1 );
p5_t1 = createLabel('Кабинет дополнительного \n        образования', 2.4, -50);
//panorama5.add( p5_t1 );
p5_t2 = createLabel('Мастерские', 1.1, -130);
//panorama5.add( p5_t2 );
p1_t4 = createLabel('3-й этаж', 0.8, 80);
//panorama1.add( p1_t4 );
p1_t5 = createLabel('Кабинет для работы \n    с документами', 0.7, -175);
//panorama1.add( p1_t5 );

p17_1_t1 = createLabel('Коридор 1-го этажа', 5.9, -175);
//panorama17_1.add( p17_1_t1 );

p17_2_t1 = createLabel('Коридор 1-го этажа', 4.5, -175);
//panorama17_2.add( p17_2_t1 );

p2_t1 = createLabel('К лабораториям', 4.6, 20);
//panorama2.add( p2_t1 );
p2_t2 = createLabel('Коридор 1-го этажа', 1.3, -250);
//panorama2.add( p2_t2 );

p3_t1 = createLabel('Санпропускник', 5.05, -20);
//panorama3.add( p3_t1 );
p3_t2 = createLabel('Автоклавная', 4.83, -330);
//panorama3.add( p3_t2 );
p3_t3 = createLabel('Микробиологические \n      исследования', 0.65, -100);
//panorama3.add( p3_t3 );
p3_t4 = createLabel('Микробиологические \n      исследования', 1.4, 00);
//panorama3.add( p3_t4 );
p3_t5 = createLabel('Микологические исследования', 3.2, -45);
//panorama3.add( p3_t5 );
p3_t6 = createLabel('Забор проб', 2.83, -55);
//panorama3.add( p3_t6 );

p4_t1 = createLabel('Коридор 1-го этажа', 0.55, -150);
//panorama4.add( p4_t1 );

p5_t1 = createLabel('Коридор 1-го этажа', 3.4, -175);
//panorama5.add( p5_t1 );

p6_t1 = createLabel('Коридор 1-го этажа', 2.4, -20);
//panorama6.add( p6_t1 );

p7_t1 = createLabel('Коридор 1-го этажа', 0.3, -20);
//panorama7.add( p7_t1 );

p8_t1 = createLabel('Коридор 1-го этажа', 2.2, -200);
//panorama8.add( p8_t1 );

p9_t1 = createLabel('Коридор 1-го этажа', 0.1, -100);
//panorama9.add( p9_t1 );

p10_t1 = createLabel('Коридор 1-го этажа', 1.16, -130);
//panorama10.add( p10_t1 );
p10_t2 = createLabel('Термостатная', 4.2, -10);
//panorama10.add( p10_t2 );

p12_t1 = createLabel('На 1-й этаж', 5.35, -130);
//panorama12.add( p12_t1 );
p12_t2 = createLabel('    Проведение \n физико-химических \n    исследований', 0.85, 250);
//panorama12.add( p12_t2 );
p12_t3 = createLabel('    Проведение \n физико-химических \n    исследований', 2.35, 100);
//panorama12.add( p12_t3 );
p12_t4 = createLabel('    Проведение \n физико-химических \n    исследований', 3.95, 50);
//panorama12.add( p12_t4 );

info_p5_1 = new PANOLENS.Infospot( 300, PANOLENS.DataImage.Info );
info_p5_1.position.set( -2519.86, -2234.82, 3687.60 );
info_p5_1.addHoverElement( document.getElementById( 'desc-p5_1' ), 200 );
//panorama5.add( info_p5_1 );

info_p6_1 = new PANOLENS.Infospot( 300, PANOLENS.DataImage.Info );
info_p6_1.position.set( 2870.49, -2174.70, 3456.64 );
info_p6_1.addHoverElement( document.getElementById( 'desc-p6_1' ), 200 );
//panorama6.add( info_p6_1 );

info_p8_1 = new PANOLENS.Infospot( 300, PANOLENS.DataImage.Info );
info_p8_1.position.set( -1157.05, 220.09, -4850.32 );
info_p8_1.addHoverElement( document.getElementById( 'desc-p8_1' ), 200 );
//panorama8.add( info_p8_1 );

info_p9_1 = new PANOLENS.Infospot( 300, PANOLENS.DataImage.Info );
info_p9_1.position.set( 4585.20, 326.18, 1952.45 );
info_p9_1.addHoverElement( document.getElementById( 'desc-p9_1' ), 200 );
//panorama9.add( info_p9_1 );

info_p9_2 = new PANOLENS.Infospot( 300, PANOLENS.DataImage.Info );
info_p9_2.position.set( 4462.10, -1174.62, -1918.06 );
info_p9_2.addHoverElement( document.getElementById( 'desc-p9_2' ), 200 );
//panorama9.add( info_p9_2 );

info_p10_1 = new PANOLENS.Infospot( 300, PANOLENS.DataImage.Info );
info_p10_1.position.set( 2853.84, 443.19, -4074.81 );
info_p10_1.addHoverElement( document.getElementById( 'desc-p10_1' ), 200 );
//panorama10.add( info_p10_1 );

info_p11_1 = new PANOLENS.Infospot( 300, PANOLENS.DataImage.Info );
info_p11_1.position.set( 3079.23, -373.10, 3912.63 );
info_p11_1.addHoverElement( document.getElementById( 'desc-p11_1' ), 200 );
//panorama11.add( info_p11_1 );

info_p13_1_1 = new PANOLENS.Infospot( 300, PANOLENS.DataImage.Info );
info_p13_1_1.position.set( 3745.09, -2321.64, 2348.57 );
info_p13_1_1.addHoverElement( document.getElementById( 'desc-p13_1_1' ), 200 );
//panorama13_1.add( info_p13_1_1 );
info_p13_1_2 = new PANOLENS.Infospot( 300, PANOLENS.DataImage.Info );
info_p13_1_2.position.set( -910.80, -2366.09, -4305.69 );
info_p13_1_2.addHoverElement( document.getElementById( 'desc-p13_1_2' ), 200 );
//panorama13_1.add( info_p13_1_2 );

info_p13_2_1 = new PANOLENS.Infospot( 300, PANOLENS.DataImage.Info );
info_p13_2_1.position.set( -4919.62, 225.32, 800.70 );
info_p13_2_1.addHoverElement( document.getElementById( 'desc-p13_2_1' ), 200 );
//panorama13_2.add( info_p13_2_1 );

info_p13_4_1 = new PANOLENS.Infospot( 300, PANOLENS.DataImage.Info );
info_p13_4_1.position.set( 2255.78, -2283.40, 3830.85 );
info_p13_4_1.addHoverElement( document.getElementById( 'desc-p13_4_1' ), 200 );
//panorama13_4.add( info_p13_4_1 );
info_p13_4_2 = new PANOLENS.Infospot( 300, PANOLENS.DataImage.Info );
info_p13_4_2.position.set( 3963.87, -1368.49, 2706.61 );
info_p13_4_2.addHoverElement( document.getElementById( 'desc-p13_4_2' ), 200 );
//panorama13_4.add( info_p13_4_2 );
info_p13_4_3 = new PANOLENS.Infospot( 300, PANOLENS.DataImage.Info );
info_p13_4_3.position.set( 4585.53, -1505.99, -1276.95 );
info_p13_4_3.addHoverElement( document.getElementById( 'desc-p13_4_3' ), 200 );
//panorama13_4.add( info_p13_4_3 );
info_p13_4_4 = new PANOLENS.Infospot( 300, PANOLENS.DataImage.Info );
info_p13_4_4.position.set( -1331.62, -3079.72, -3697.05 );
info_p13_4_4.addHoverElement( document.getElementById( 'desc-p13_4_4' ), 200 );
//panorama13_4.add( info_p13_4_4 );

info_p14_1_1 = new PANOLENS.Infospot( 300, PANOLENS.DataImage.Info );
info_p14_1_1.position.set( -4615.91, -1770.56, -681.55 );
info_p14_1_1.addHoverElement( document.getElementById( 'desc-p14_1_1' ), 200 );
//panorama14_1.add( info_p14_1_1 );
info_p14_1_2 = new PANOLENS.Infospot( 300, PANOLENS.DataImage.Info );
info_p14_1_2.position.set( -4950.63, -539.46, -315.52 );
info_p14_1_2.addHoverElement( document.getElementById( 'desc-p14_1_2' ), 200 );
//panorama14_1.add( info_p14_1_2 );
info_p14_1_3 = new PANOLENS.Infospot( 300, PANOLENS.DataImage.Info );
info_p14_1_3.position.set( -2884.14, -1090.44, 3931.56 );
info_p14_1_3.addHoverElement( document.getElementById( 'desc-p14_1_3' ), 200 );
//panorama14_1.add( info_p14_1_3 );

info_p15_2_1 = new PANOLENS.Infospot( 300, PANOLENS.DataImage.Info );
info_p15_2_1.position.set( 4173.26, -1802.17, 2060.94 );
info_p15_2_1.addHoverElement( document.getElementById( 'desc-p15_2_1' ), 200 );
//panorama15_2.add( info_p15_2_1 );
info_p15_2_2 = new PANOLENS.Infospot( 300, PANOLENS.DataImage.Info );
info_p15_2_2.position.set( -4820.01, -821.60, -1035.75 );
info_p15_2_2.addHoverElement( document.getElementById( 'desc-p15_2_2' ), 200 );
//panorama15_2.add( info_p15_2_2 );

}

function createLabel(text='', angle=0, height=0)
{
    titleSprite = createTextShape( text, 15);
    titleSprite.position.set( radius * Math.sin( -angle ), height, radius * Math.cos( -angle ) );
    titleSprite.position.y += 45;
    titleSprite.rotation.y = Math.PI - angle;
    titleSprite.scale.multiplyScalar( 2 );
    return titleSprite;
}




