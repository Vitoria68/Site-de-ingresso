// create a document and pipe to a blob
import fs from 'fs'
import PDFDocument from 'pdfkit'
const doc = new PDFDocument({ size: [830, 300], margin: 0 });
doc.pipe(fs.createWriteStream('anavitoria.pdf'))

// Fundo 
doc.rect(0, 0, 900, 300).fill('#');

// Barra lateral esquerda 
doc
  .fillColor('#696969')
  .rect(0, 0, 60, 300)
  .fill();

// Texto "1 2 3" na vertical esquerda
doc
  .fillColor('white')
  .fontSize(40)
  .rotate(90, { origin: [15, 150] })
  .text('1 2 3', 15, 150, { align: 'center' })
  .rotate(-90, { origin: [15, 150] });

// Cabeçalho - "STAGE ONE"
doc
  .fillColor('#696969')
  .rect(240, 10, 300, 30)
  .fill();
doc
  .fillColor('#E6E6FA')
  .fontSize(30)
  .font('Courier-Bold')
  .text('STAGE ONE', 0, 15, { align: 'center', width: 790 });
  
  // Endereço e produção
doc.fillColor('#9A32CD').fontSize(12).font('Helvetica');
doc.text('Avenida Guilherme Campos, 500 - Bloco II - Jardim Santa Genebra', 60, 50, { align: 'center', width: 660 });
doc.text('PRODUÇÃO DE STUDIO SANTANA', 60, 65, { align: 'center', width: 660 });

// Nome da artista
doc.font('Helvetica-BoldOblique').fontSize(47).fillColor('#CD4F39');
doc.text('ANAVITORIA ', 76, 150, { align: 'center', width: 660 });

// Data
doc.fontSize(16).fillColor('#9A32CD');
doc.text('20', 90, 123, { align: 'left' }).font('Helvetica-Bold');
doc.fontSize(13).text('SETEMBRO', 115, 125);
doc.fontSize(21).text('2025', 115, 145);

// Horário
doc.fontSize(12).text('SÁBADO - 20H30', 60, 250, { align: 'center', width: 660 });

// Ingresso individual
doc.fontSize(10).text('INGRESSO INDIVIDUAL', 90, 170);
doc.fontSize(18).text('R$395', 115, 185);

// Texto revenda proibida
doc.fontSize(8).text('REVENDA PROIBIDA', 60, 270, { align: 'center', width: 660 });

// fundo redondo
doc
  .circle(620, 170, 220)
  .fillOpacity(0.2)
  .fill('#7A378B')
  .fillOpacity(1);

doc
  .circle(190, 170, 220)
  .fillOpacity(0.2)
  .fill('#7A378B')
  .fillOpacity(1);
 
  
doc
  .fillColor('#fcb1a2')
  .strokeColor('#B03060')
  .lineWidth(2)
  .dash(5, { space: 3 })
  .moveTo(650, 0)
  .lineTo(650, 300)
  .stroke()
  .undash();

// Conteúdo da lateral direita
doc.fillColor('#9A32CD');
doc.fontSize(10).text('ZONA', 665, 40);
doc.text('FILEIRA', 713, 40);
doc.text('ASSENTO', 765, 40);



doc.fontSize(23).text('1', 670, 60);
doc.text('2', 727, 60);
doc.text('3', 783, 60);


doc
  .fillColor('#696969').fillOpacity(0.2)
  .rect(650, 85, 200, 20)
  .fill();
  doc.fillColor('#9A32CD')
  .fillOpacity(1);

doc.fontSize(14).font('Helvetica-Bold').text('ARQUIBANCADA', 681, 90, {
  angle: 90,
  align: 'center',
  lineBreak: false
});

doc.font('Helvetica').fontSize(9).text('EXPO D. PEDRO', 700, 110);
doc.text('20 DE SETEMBRO', 700, 125);
doc.text('20H30', 725, 140);




// an SVG path
doc
  .scale(0.6)
  .translate(990, 190)
   .fillOpacity(0.4)
  .path('M 250,75 L 323,301 131,161 369,161 177,301 z')
  .fill('#7A378B', 'even-odd')
  .restore();

doc.save();




// end and display the document in the iframe to the right
doc.end();



