(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js', './kotlinx-io-kotlinx-io-bytestring.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'), require('./kotlinx-io-kotlinx-io-bytestring.js'));
  else {
    if (typeof globalThis['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'kotlinx-io-kotlinx-io-core'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'kotlinx-io-kotlinx-io-core'.");
    }
    if (typeof globalThis['kotlinx-io-kotlinx-io-bytestring'] === 'undefined') {
      throw new Error("Error loading module 'kotlinx-io-kotlinx-io-core'. Its dependency 'kotlinx-io-kotlinx-io-bytestring' was not found. Please, check whether 'kotlinx-io-kotlinx-io-bytestring' is loaded prior to 'kotlinx-io-kotlinx-io-core'.");
    }
    globalThis['kotlinx-io-kotlinx-io-core'] = factory(typeof globalThis['kotlinx-io-kotlinx-io-core'] === 'undefined' ? {} : globalThis['kotlinx-io-kotlinx-io-core'], globalThis['kotlin-kotlin-stdlib'], globalThis['kotlinx-io-kotlinx-io-bytestring']);
  }
}(function (_, kotlin_kotlin, kotlin_org_jetbrains_kotlinx_kotlinx_io_bytestring) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var IndexOutOfBoundsException_init_$Create$ = kotlin_kotlin.$_$.q4;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.j4;
  var subtract = kotlin_kotlin.$_$.ba;
  var _Char___init__impl__6a9atx = kotlin_kotlin.$_$.h;
  var charArrayOf = kotlin_kotlin.$_$.ha;
  var protoOf = kotlin_kotlin.$_$.wb;
  var toString = kotlin_kotlin.$_$.zb;
  var Unit_instance = kotlin_kotlin.$_$.s2;
  var toShort = kotlin_kotlin.$_$.yb;
  var add = kotlin_kotlin.$_$.m9;
  var ensureNotNull = kotlin_kotlin.$_$.rg;
  var fromInt = kotlin_kotlin.$_$.r9;
  var convertToInt = kotlin_kotlin.$_$.o9;
  var StringBuilder_init_$Create$ = kotlin_kotlin.$_$.x3;
  var initMetadataForClass = kotlin_kotlin.$_$.xa;
  var VOID = kotlin_kotlin.$_$.d;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.n4;
  var UnsafeByteStringOperations_instance = kotlin_org_jetbrains_kotlinx_kotlinx_io_bytestring.$_$.a;
  var AutoCloseable = kotlin_kotlin.$_$.jf;
  var objectCreate = kotlin_kotlin.$_$.vb;
  var initMetadataForCompanion = kotlin_kotlin.$_$.ya;
  var arrayCopy = kotlin_kotlin.$_$.s5;
  var toByte = kotlin_kotlin.$_$.xb;
  var IllegalArgumentException_init_$Create$_0 = kotlin_kotlin.$_$.h4;
  var initMetadataForObject = kotlin_kotlin.$_$.db;
  var initMetadataForInterface = kotlin_kotlin.$_$.bb;
  var multiply = kotlin_kotlin.$_$.v9;
  var charCodeAt = kotlin_kotlin.$_$.ja;
  var Char__toInt_impl_vasixd = kotlin_kotlin.$_$.n;
  var charArray = kotlin_kotlin.$_$.ia;
  var numberToChar = kotlin_kotlin.$_$.tb;
  var concatToString = kotlin_kotlin.$_$.cd;
  var Exception_init_$Init$ = kotlin_kotlin.$_$.c4;
  var captureStack = kotlin_kotlin.$_$.ga;
  var Exception_init_$Init$_0 = kotlin_kotlin.$_$.d4;
  var Exception_init_$Init$_1 = kotlin_kotlin.$_$.f4;
  var Exception = kotlin_kotlin.$_$.sf;
  //endregion
  //region block: pre-declaration
  initMetadataForInterface(Source, 'Source', VOID, VOID, [AutoCloseable]);
  function write$default(source, startIndex, endIndex, $super) {
    startIndex = startIndex === VOID ? 0 : startIndex;
    endIndex = endIndex === VOID ? source.length : endIndex;
    var tmp;
    if ($super === VOID) {
      this.j1i(source, startIndex, endIndex);
      tmp = Unit_instance;
    } else {
      tmp = $super.j1i.call(this, source, startIndex, endIndex);
    }
    return tmp;
  }
  initMetadataForInterface(Sink, 'Sink', VOID, VOID, [AutoCloseable]);
  initMetadataForClass(Buffer, 'Buffer', Buffer, VOID, [Source, Sink]);
  initMetadataForClass(PeekSource, 'PeekSource', VOID, VOID, [AutoCloseable]);
  initMetadataForClass(RealSource, 'RealSource', VOID, VOID, [Source]);
  initMetadataForCompanion(Companion);
  initMetadataForClass(Segment, 'Segment');
  initMetadataForClass(SegmentCopyTracker, 'SegmentCopyTracker');
  initMetadataForObject(AlwaysSharedCopyTracker, 'AlwaysSharedCopyTracker', VOID, SegmentCopyTracker);
  initMetadataForObject(UnsafeBufferOperations, 'UnsafeBufferOperations');
  initMetadataForClass(SegmentReadContextImpl$1);
  initMetadataForClass(SegmentWriteContextImpl$1);
  initMetadataForClass(BufferIterationContextImpl$1);
  initMetadataForClass(IOException, 'IOException', IOException_init_$Create$, Exception);
  initMetadataForClass(EOFException, 'EOFException', EOFException_init_$Create$, IOException);
  initMetadataForObject(SegmentPool, 'SegmentPool');
  //endregion
  function get_HEX_DIGIT_CHARS() {
    _init_properties__Util_kt__g8tcl9();
    return HEX_DIGIT_CHARS;
  }
  var HEX_DIGIT_CHARS;
  function checkBounds(size, startIndex, endIndex) {
    _init_properties__Util_kt__g8tcl9();
    if (startIndex < 0n || endIndex > size) {
      throw IndexOutOfBoundsException_init_$Create$('startIndex (' + startIndex.toString() + ') and endIndex (' + endIndex.toString() + ') are not within the range [0..size(' + size.toString() + '))');
    }
    if (startIndex > endIndex) {
      throw IllegalArgumentException_init_$Create$('startIndex (' + startIndex.toString() + ') > endIndex (' + endIndex.toString() + ')');
    }
  }
  function checkOffsetAndCount(size, offset, byteCount) {
    _init_properties__Util_kt__g8tcl9();
    if (offset < 0n || offset > size || subtract(size, offset) < byteCount || byteCount < 0n) {
      throw IllegalArgumentException_init_$Create$('offset (' + offset.toString() + ') and byteCount (' + byteCount.toString() + ') are not within the range [0..size(' + size.toString() + '))');
    }
  }
  var properties_initialized__Util_kt_67kc5b;
  function _init_properties__Util_kt__g8tcl9() {
    if (!properties_initialized__Util_kt_67kc5b) {
      properties_initialized__Util_kt_67kc5b = true;
      // Inline function 'kotlin.charArrayOf' call
      HEX_DIGIT_CHARS = charArrayOf([_Char___init__impl__6a9atx(48), _Char___init__impl__6a9atx(49), _Char___init__impl__6a9atx(50), _Char___init__impl__6a9atx(51), _Char___init__impl__6a9atx(52), _Char___init__impl__6a9atx(53), _Char___init__impl__6a9atx(54), _Char___init__impl__6a9atx(55), _Char___init__impl__6a9atx(56), _Char___init__impl__6a9atx(57), _Char___init__impl__6a9atx(97), _Char___init__impl__6a9atx(98), _Char___init__impl__6a9atx(99), _Char___init__impl__6a9atx(100), _Char___init__impl__6a9atx(101), _Char___init__impl__6a9atx(102)]);
    }
  }
  function throwEof($this, byteCount) {
    throw EOFException_init_$Create$_0("Buffer doesn't contain required number of bytes (size: " + $this.e1().toString() + ', required: ' + byteCount.toString() + ')');
  }
  function Buffer() {
    this.w1g_1 = null;
    this.x1g_1 = null;
    this.y1g_1 = 0n;
  }
  protoOf(Buffer).e1 = function () {
    return this.y1g_1;
  };
  protoOf(Buffer).z1g = function () {
    return this;
  };
  protoOf(Buffer).a1h = function () {
    return this.e1() === 0n;
  };
  protoOf(Buffer).b1h = function (byteCount) {
    // Inline function 'kotlin.require' call
    if (!(byteCount >= 0n)) {
      var message = 'byteCount: ' + byteCount.toString();
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    if (this.e1() < byteCount) {
      throw EOFException_init_$Create$_0("Buffer doesn't contain required number of bytes (size: " + this.e1().toString() + ', required: ' + byteCount.toString() + ')');
    }
  };
  protoOf(Buffer).c1h = function (byteCount) {
    // Inline function 'kotlin.require' call
    if (!(byteCount >= 0n)) {
      var message = 'byteCount: ' + byteCount.toString() + ' < 0';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    return this.e1() >= byteCount;
  };
  protoOf(Buffer).d1h = function () {
    var tmp0_elvis_lhs = this.w1g_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throwEof(this, 1n);
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var segment = tmp;
    var segmentSize = segment.e1();
    if (segmentSize === 0) {
      this.l1h();
      return this.d1h();
    }
    var v = segment.m1h();
    this.y1g_1 = subtract(this.y1g_1, 1n);
    if (segmentSize === 1) {
      this.l1h();
    }
    return v;
  };
  protoOf(Buffer).n1h = function () {
    var tmp0_elvis_lhs = this.w1g_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throwEof(this, 2n);
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var segment = tmp;
    var segmentSize = segment.e1();
    if (segmentSize < 2) {
      this.b1h(2n);
      if (segmentSize === 0) {
        this.l1h();
        return this.n1h();
      }
      // Inline function 'kotlinx.io.and' call
      var tmp_0 = (this.d1h() & 255) << 8;
      // Inline function 'kotlinx.io.and' call
      var tmp$ret$1 = this.d1h() & 255;
      return toShort(tmp_0 | tmp$ret$1);
    }
    var v = segment.o1h();
    this.y1g_1 = subtract(this.y1g_1, 2n);
    if (segmentSize === 2) {
      this.l1h();
    }
    return v;
  };
  protoOf(Buffer).p1h = function () {
    return Unit_instance;
  };
  protoOf(Buffer).q1h = function (out, startIndex, endIndex) {
    checkBounds(this.e1(), startIndex, endIndex);
    if (startIndex === endIndex)
      return Unit_instance;
    var currentOffset = startIndex;
    var remainingByteCount = subtract(endIndex, startIndex);
    out.y1g_1 = add(out.y1g_1, remainingByteCount);
    var s = this.w1g_1;
    while (currentOffset >= fromInt(ensureNotNull(s).g1h_1 - s.f1h_1 | 0)) {
      currentOffset = subtract(currentOffset, fromInt(s.g1h_1 - s.f1h_1 | 0));
      s = s.j1h_1;
    }
    while (remainingByteCount > 0n) {
      var copy = ensureNotNull(s).r1h();
      copy.f1h_1 = copy.f1h_1 + convertToInt(currentOffset) | 0;
      var tmp = copy;
      var tmp0 = copy.f1h_1 + convertToInt(remainingByteCount) | 0;
      // Inline function 'kotlin.comparisons.minOf' call
      var b = copy.g1h_1;
      tmp.g1h_1 = Math.min(tmp0, b);
      // Inline function 'kotlinx.io.Buffer.pushSegment' call
      if (out.w1g_1 == null) {
        out.w1g_1 = copy;
        out.x1g_1 = copy;
      } else if (false) {
        out.x1g_1 = ensureNotNull(out.x1g_1).s1h(copy).t1h();
        if (ensureNotNull(out.x1g_1).k1h_1 == null) {
          out.w1g_1 = out.x1g_1;
        }
      } else {
        out.x1g_1 = ensureNotNull(out.x1g_1).s1h(copy);
      }
      remainingByteCount = subtract(remainingByteCount, fromInt(copy.g1h_1 - copy.f1h_1 | 0));
      currentOffset = 0n;
      s = s.j1h_1;
    }
  };
  protoOf(Buffer).u1h = function () {
    var result = this.e1();
    if (result === 0n)
      return 0n;
    var tail = ensureNotNull(this.x1g_1);
    if (tail.g1h_1 < 8192 && tail.i1h_1) {
      result = subtract(result, fromInt(tail.g1h_1 - tail.f1h_1 | 0));
    }
    return result;
  };
  protoOf(Buffer).v1h = function (position) {
    if (position < 0n || position >= this.e1()) {
      throw IndexOutOfBoundsException_init_$Create$('position (' + position.toString() + ') is not within the range [0..size(' + this.e1().toString() + '))');
    }
    if (position === 0n) {
      return ensureNotNull(this.w1g_1).w1h(0);
    }
    $l$block_1: {
      // Inline function 'kotlinx.io.seek' call
      if (this.w1g_1 == null) {
        return ensureNotNull(null).w1h(convertToInt(subtract(position, -1n)));
      }
      if (subtract(this.e1(), position) < position) {
        var s = this.x1g_1;
        var offset = this.e1();
        $l$loop: while (!(s == null) && offset > position) {
          offset = subtract(offset, fromInt(s.g1h_1 - s.f1h_1 | 0));
          if (offset <= position)
            break $l$loop;
          s = s.k1h_1;
        }
        var tmp0 = s;
        var offset_0 = offset;
        return ensureNotNull(tmp0).w1h(convertToInt(subtract(position, offset_0)));
      } else {
        var s_0 = this.w1g_1;
        var offset_1 = 0n;
        $l$loop_0: while (!(s_0 == null)) {
          var tmp0_0 = offset_1;
          // Inline function 'kotlin.Long.plus' call
          var other = s_0.g1h_1 - s_0.f1h_1 | 0;
          var nextOffset = add(tmp0_0, fromInt(other));
          if (nextOffset > position)
            break $l$loop_0;
          s_0 = s_0.j1h_1;
          offset_1 = nextOffset;
        }
        var tmp0_1 = s_0;
        var offset_2 = offset_1;
        return ensureNotNull(tmp0_1).w1h(convertToInt(subtract(position, offset_2)));
      }
    }
  };
  protoOf(Buffer).y2 = function () {
    return this.x1h(this.e1());
  };
  protoOf(Buffer).x1h = function (byteCount) {
    // Inline function 'kotlinx.io.checkByteCount' call
    // Inline function 'kotlin.require' call
    if (!(byteCount >= 0n)) {
      var message = 'byteCount (' + byteCount.toString() + ') < 0';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    var remainingByteCount = byteCount;
    while (remainingByteCount > 0n) {
      var tmp0_elvis_lhs = this.w1g_1;
      var tmp;
      if (tmp0_elvis_lhs == null) {
        throw EOFException_init_$Create$_0('Buffer exhausted before skipping ' + byteCount.toString() + ' bytes.');
      } else {
        tmp = tmp0_elvis_lhs;
      }
      var head = tmp;
      var tmp0 = remainingByteCount;
      // Inline function 'kotlinx.io.minOf' call
      var b = head.g1h_1 - head.f1h_1 | 0;
      // Inline function 'kotlin.comparisons.minOf' call
      var b_0 = fromInt(b);
      var tmp$ret$3 = tmp0 <= b_0 ? tmp0 : b_0;
      var toSkip = convertToInt(tmp$ret$3);
      this.y1g_1 = subtract(this.y1g_1, fromInt(toSkip));
      remainingByteCount = subtract(remainingByteCount, fromInt(toSkip));
      head.f1h_1 = head.f1h_1 + toSkip | 0;
      if (head.f1h_1 === head.g1h_1) {
        this.l1h();
      }
    }
  };
  protoOf(Buffer).y1h = function (sink, startIndex, endIndex) {
    // Inline function 'kotlinx.io.checkBounds' call
    var size = sink.length;
    checkBounds(fromInt(size), fromInt(startIndex), fromInt(endIndex));
    var tmp0_elvis_lhs = this.w1g_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return -1;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var s = tmp;
    var tmp0 = endIndex - startIndex | 0;
    // Inline function 'kotlin.comparisons.minOf' call
    var b = s.e1();
    var toCopy = Math.min(tmp0, b);
    s.z1h(sink, startIndex, startIndex + toCopy | 0);
    this.y1g_1 = subtract(this.y1g_1, fromInt(toCopy));
    if (isEmpty(s)) {
      this.l1h();
    }
    return toCopy;
  };
  protoOf(Buffer).a1i = function (sink, byteCount) {
    // Inline function 'kotlinx.io.checkByteCount' call
    // Inline function 'kotlin.require' call
    if (!(byteCount >= 0n)) {
      var message = 'byteCount (' + byteCount.toString() + ') < 0';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    if (this.e1() === 0n)
      return -1n;
    var bytesWritten = byteCount > this.e1() ? this.e1() : byteCount;
    sink.b1i(this, bytesWritten);
    return bytesWritten;
  };
  protoOf(Buffer).c1i = function (sink, byteCount) {
    // Inline function 'kotlinx.io.checkByteCount' call
    // Inline function 'kotlin.require' call
    if (!(byteCount >= 0n)) {
      var message = 'byteCount (' + byteCount.toString() + ') < 0';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    if (this.e1() < byteCount) {
      sink.b1i(this, this.e1());
      throw EOFException_init_$Create$_0('Buffer exhausted before writing ' + byteCount.toString() + ' bytes. Only ' + this.e1().toString() + ' bytes were written.');
    }
    sink.b1i(this, byteCount);
  };
  protoOf(Buffer).d1i = function (sink) {
    var byteCount = this.e1();
    if (byteCount > 0n) {
      sink.b1i(this, byteCount);
    }
    return byteCount;
  };
  protoOf(Buffer).e1i = function () {
    return buffered(new PeekSource(this));
  };
  protoOf(Buffer).f1i = function (minimumCapacity) {
    // Inline function 'kotlin.require' call
    if (!(minimumCapacity >= 1 && minimumCapacity <= 8192)) {
      var message = 'unexpected capacity (' + minimumCapacity + '), should be in range [1, 8192]';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    if (this.x1g_1 == null) {
      var result = SegmentPool_instance.i1i();
      this.w1g_1 = result;
      this.x1g_1 = result;
      return result;
    }
    var t = ensureNotNull(this.x1g_1);
    if ((t.g1h_1 + minimumCapacity | 0) > 8192 || !t.i1h_1) {
      var newTail = t.s1h(SegmentPool_instance.i1i());
      this.x1g_1 = newTail;
      return newTail;
    }
    return t;
  };
  protoOf(Buffer).j1i = function (source, startIndex, endIndex) {
    // Inline function 'kotlinx.io.checkBounds' call
    var size = source.length;
    checkBounds(fromInt(size), fromInt(startIndex), fromInt(endIndex));
    var currentOffset = startIndex;
    while (currentOffset < endIndex) {
      var tail = this.f1i(1);
      var tmp0 = endIndex - currentOffset | 0;
      // Inline function 'kotlin.comparisons.minOf' call
      var b = tail.k1i();
      var toCopy = Math.min(tmp0, b);
      tail.l1i(source, currentOffset, currentOffset + toCopy | 0);
      currentOffset = currentOffset + toCopy | 0;
    }
    var tmp = this;
    var tmp0_0 = this.y1g_1;
    // Inline function 'kotlin.Long.plus' call
    var other = endIndex - startIndex | 0;
    tmp.y1g_1 = add(tmp0_0, fromInt(other));
  };
  protoOf(Buffer).n1i = function (source, byteCount) {
    // Inline function 'kotlinx.io.checkByteCount' call
    // Inline function 'kotlin.require' call
    if (!(byteCount >= 0n)) {
      var message = 'byteCount (' + byteCount.toString() + ') < 0';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    var remainingByteCount = byteCount;
    while (remainingByteCount > 0n) {
      var read = source.a1i(this, remainingByteCount);
      if (read === -1n) {
        throw EOFException_init_$Create$_0('Source exhausted before reading ' + byteCount.toString() + ' bytes. ' + ('Only ' + subtract(byteCount, remainingByteCount).toString() + ' were read.'));
      }
      remainingByteCount = subtract(remainingByteCount, read);
    }
  };
  protoOf(Buffer).b1i = function (source, byteCount) {
    // Inline function 'kotlin.require' call
    if (!!(source === this)) {
      var message = 'source == this';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    checkOffsetAndCount(source.y1g_1, 0n, byteCount);
    var remainingByteCount = byteCount;
    while (remainingByteCount > 0n) {
      if (remainingByteCount < fromInt(ensureNotNull(source.w1g_1).e1())) {
        var tail = this.x1g_1;
        var tmp;
        if (!(tail == null) && tail.i1h_1) {
          var tmp0 = remainingByteCount;
          // Inline function 'kotlin.Long.plus' call
          var other = tail.g1h_1;
          var tmp0_0 = add(tmp0, fromInt(other));
          // Inline function 'kotlin.Long.minus' call
          var other_0 = tail.o1i() ? 0 : tail.f1h_1;
          tmp = subtract(tmp0_0, fromInt(other_0)) <= 8192n;
        } else {
          tmp = false;
        }
        if (tmp) {
          ensureNotNull(source.w1g_1).q1i(tail, convertToInt(remainingByteCount));
          source.y1g_1 = subtract(source.y1g_1, remainingByteCount);
          this.y1g_1 = add(this.y1g_1, remainingByteCount);
          return Unit_instance;
        } else {
          source.w1g_1 = ensureNotNull(source.w1g_1).p1i(convertToInt(remainingByteCount));
        }
      }
      var segmentToMove = ensureNotNull(source.w1g_1);
      var movedByteCount = fromInt(segmentToMove.e1());
      source.w1g_1 = segmentToMove.r1i();
      if (source.w1g_1 == null) {
        source.x1g_1 = null;
      }
      // Inline function 'kotlinx.io.Buffer.pushSegment' call
      if (this.w1g_1 == null) {
        this.w1g_1 = segmentToMove;
        this.x1g_1 = segmentToMove;
      } else if (true) {
        this.x1g_1 = ensureNotNull(this.x1g_1).s1h(segmentToMove).t1h();
        if (ensureNotNull(this.x1g_1).k1h_1 == null) {
          this.w1g_1 = this.x1g_1;
        }
      } else {
        this.x1g_1 = ensureNotNull(this.x1g_1).s1h(segmentToMove);
      }
      source.y1g_1 = subtract(source.y1g_1, movedByteCount);
      this.y1g_1 = add(this.y1g_1, movedByteCount);
      remainingByteCount = subtract(remainingByteCount, movedByteCount);
    }
  };
  protoOf(Buffer).s1i = function (source) {
    var totalBytesRead = 0n;
    $l$loop: while (true) {
      var readCount = source.a1i(this, 8192n);
      if (readCount === -1n)
        break $l$loop;
      totalBytesRead = add(totalBytesRead, readCount);
    }
    return totalBytesRead;
  };
  protoOf(Buffer).t1i = function (byte) {
    this.f1i(1).u1i(byte);
    this.y1g_1 = add(this.y1g_1, 1n);
  };
  protoOf(Buffer).v1i = function (short) {
    this.f1i(2).w1i(short);
    this.y1g_1 = add(this.y1g_1, 2n);
  };
  protoOf(Buffer).f4 = function () {
    return Unit_instance;
  };
  protoOf(Buffer).toString = function () {
    if (this.e1() === 0n)
      return 'Buffer(size=0)';
    var maxPrintableBytes = 64;
    // Inline function 'kotlinx.io.minOf' call
    var b = this.e1();
    // Inline function 'kotlin.comparisons.minOf' call
    var a = fromInt(maxPrintableBytes);
    var tmp$ret$0 = a <= b ? a : b;
    var len = convertToInt(tmp$ret$0);
    var builder = StringBuilder_init_$Create$(imul(len, 2) + (this.e1() > fromInt(maxPrintableBytes) ? 1 : 0) | 0);
    var bytesWritten = 0;
    // Inline function 'kotlinx.io.unsafe.UnsafeBufferOperations.forEachSegment' call
    var curr = this.w1g_1;
    while (!(curr == null)) {
      var tmp0 = get_SegmentReadContextImpl();
      var segment = curr;
      var idx = 0;
      while (bytesWritten < len && idx < segment.e1()) {
        var _unary__edvuaz = idx;
        idx = _unary__edvuaz + 1 | 0;
        var b_0 = tmp0.x1i(segment, _unary__edvuaz);
        bytesWritten = bytesWritten + 1 | 0;
        var tmp = get_HEX_DIGIT_CHARS();
        // Inline function 'kotlinx.io.shr' call
        var tmp$ret$4 = b_0 >> 4;
        var tmp_0 = builder.s(tmp[tmp$ret$4 & 15]);
        var tmp_1 = get_HEX_DIGIT_CHARS();
        // Inline function 'kotlinx.io.and' call
        var tmp$ret$5 = b_0 & 15;
        tmp_0.s(tmp_1[tmp$ret$5]);
      }
      curr = curr.j1h_1;
    }
    if (this.e1() > fromInt(maxPrintableBytes)) {
      builder.s(_Char___init__impl__6a9atx(8230));
    }
    return 'Buffer(size=' + this.e1().toString() + ' hex=' + builder.toString() + ')';
  };
  protoOf(Buffer).l1h = function () {
    var oldHead = ensureNotNull(this.w1g_1);
    var nextHead = oldHead.j1h_1;
    this.w1g_1 = nextHead;
    if (nextHead == null) {
      this.x1g_1 = null;
    } else {
      nextHead.k1h_1 = null;
    }
    oldHead.j1h_1 = null;
    SegmentPool_instance.y1i(oldHead);
  };
  protoOf(Buffer).z1i = function () {
    var oldTail = ensureNotNull(this.x1g_1);
    var newTail = oldTail.k1h_1;
    this.x1g_1 = newTail;
    if (newTail == null) {
      this.w1g_1 = null;
    } else {
      newTail.j1h_1 = null;
    }
    oldTail.k1h_1 = null;
    SegmentPool_instance.y1i(oldTail);
  };
  function indexOf(_this__u8e3s4, byte, startIndex, endIndex) {
    startIndex = startIndex === VOID ? 0n : startIndex;
    endIndex = endIndex === VOID ? _this__u8e3s4.e1() : endIndex;
    // Inline function 'kotlin.comparisons.minOf' call
    var b = _this__u8e3s4.e1();
    var endOffset = endIndex <= b ? endIndex : b;
    checkBounds(_this__u8e3s4.e1(), startIndex, endOffset);
    if (startIndex === endOffset)
      return -1n;
    $l$block_1: {
      // Inline function 'kotlinx.io.seek' call
      if (_this__u8e3s4.w1g_1 == null) {
        if (-1n === -1n) {
          return -1n;
        }
        var segment = null;
        var offset = -1n;
        do {
          // Inline function 'kotlin.check' call
          if (!(endOffset > offset)) {
            throw IllegalStateException_init_$Create$('Check failed.');
          }
          ensureNotNull(segment);
          var tmp = segment;
          // Inline function 'kotlin.comparisons.maxOf' call
          var a = convertToInt(subtract(startIndex, offset));
          var tmp_0 = Math.max(a, 0);
          var tmp0 = segment.e1();
          // Inline function 'kotlin.comparisons.minOf' call
          var b_0 = convertToInt(subtract(endOffset, offset));
          var tmp$ret$5 = Math.min(tmp0, b_0);
          var idx = indexOf_0(tmp, byte, tmp_0, tmp$ret$5);
          if (!(idx === -1)) {
            return add(offset, fromInt(idx));
          }
          var tmp0_0 = offset;
          // Inline function 'kotlin.Long.plus' call
          var other = segment.e1();
          offset = add(tmp0_0, fromInt(other));
          segment = segment.j1h_1;
        }
         while (!(segment == null) && offset < endOffset);
        return -1n;
      }
      if (subtract(_this__u8e3s4.e1(), startIndex) < startIndex) {
        var s = _this__u8e3s4.x1g_1;
        var offset_0 = _this__u8e3s4.e1();
        $l$loop: while (!(s == null) && offset_0 > startIndex) {
          offset_0 = subtract(offset_0, fromInt(s.g1h_1 - s.f1h_1 | 0));
          if (offset_0 <= startIndex)
            break $l$loop;
          s = s.k1h_1;
        }
        var tmp0_1 = s;
        var o = offset_0;
        if (o === -1n) {
          return -1n;
        }
        var segment_0 = tmp0_1;
        var offset_1 = o;
        do {
          // Inline function 'kotlin.check' call
          if (!(endOffset > offset_1)) {
            throw IllegalStateException_init_$Create$('Check failed.');
          }
          ensureNotNull(segment_0);
          var tmp_1 = segment_0;
          // Inline function 'kotlin.comparisons.maxOf' call
          var a_0 = convertToInt(subtract(startIndex, offset_1));
          var tmp_2 = Math.max(a_0, 0);
          var tmp0_2 = segment_0.e1();
          // Inline function 'kotlin.comparisons.minOf' call
          var b_1 = convertToInt(subtract(endOffset, offset_1));
          var tmp$ret$10 = Math.min(tmp0_2, b_1);
          var idx_0 = indexOf_0(tmp_1, byte, tmp_2, tmp$ret$10);
          if (!(idx_0 === -1)) {
            return add(offset_1, fromInt(idx_0));
          }
          var tmp0_3 = offset_1;
          // Inline function 'kotlin.Long.plus' call
          var other_0 = segment_0.e1();
          offset_1 = add(tmp0_3, fromInt(other_0));
          segment_0 = segment_0.j1h_1;
        }
         while (!(segment_0 == null) && offset_1 < endOffset);
        return -1n;
      } else {
        var s_0 = _this__u8e3s4.w1g_1;
        var offset_2 = 0n;
        $l$loop_0: while (!(s_0 == null)) {
          var tmp0_4 = offset_2;
          // Inline function 'kotlin.Long.plus' call
          var other_1 = s_0.g1h_1 - s_0.f1h_1 | 0;
          var nextOffset = add(tmp0_4, fromInt(other_1));
          if (nextOffset > startIndex)
            break $l$loop_0;
          s_0 = s_0.j1h_1;
          offset_2 = nextOffset;
        }
        var tmp0_5 = s_0;
        var o_0 = offset_2;
        if (o_0 === -1n) {
          return -1n;
        }
        var segment_1 = tmp0_5;
        var offset_3 = o_0;
        do {
          // Inline function 'kotlin.check' call
          if (!(endOffset > offset_3)) {
            throw IllegalStateException_init_$Create$('Check failed.');
          }
          ensureNotNull(segment_1);
          var tmp_3 = segment_1;
          // Inline function 'kotlin.comparisons.maxOf' call
          var a_1 = convertToInt(subtract(startIndex, offset_3));
          var tmp_4 = Math.max(a_1, 0);
          var tmp0_6 = segment_1.e1();
          // Inline function 'kotlin.comparisons.minOf' call
          var b_2 = convertToInt(subtract(endOffset, offset_3));
          var tmp$ret$16 = Math.min(tmp0_6, b_2);
          var idx_1 = indexOf_0(tmp_3, byte, tmp_4, tmp$ret$16);
          if (!(idx_1 === -1)) {
            return add(offset_3, fromInt(idx_1));
          }
          var tmp0_7 = offset_3;
          // Inline function 'kotlin.Long.plus' call
          var other_2 = segment_1.e1();
          offset_3 = add(tmp0_7, fromInt(other_2));
          segment_1 = segment_1.j1h_1;
        }
         while (!(segment_1 == null) && offset_3 < endOffset);
        return -1n;
      }
    }
  }
  function readByteString(_this__u8e3s4, byteCount) {
    return UnsafeByteStringOperations_instance.v1g(readByteArray_0(_this__u8e3s4, byteCount));
  }
  function buffered(_this__u8e3s4) {
    return new RealSource(_this__u8e3s4);
  }
  function PeekSource(upstream) {
    this.a1j_1 = upstream;
    this.b1j_1 = this.a1j_1.z1g();
    this.c1j_1 = this.b1j_1.w1g_1;
    var tmp = this;
    var tmp0_safe_receiver = this.b1j_1.w1g_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.f1h_1;
    tmp.d1j_1 = tmp1_elvis_lhs == null ? -1 : tmp1_elvis_lhs;
    this.e1j_1 = false;
    this.f1j_1 = 0n;
  }
  protoOf(PeekSource).a1i = function (sink, byteCount) {
    // Inline function 'kotlin.check' call
    if (!!this.e1j_1) {
      var message = 'Source is closed.';
      throw IllegalStateException_init_$Create$(toString(message));
    }
    // Inline function 'kotlinx.io.checkByteCount' call
    // Inline function 'kotlin.require' call
    if (!(byteCount >= 0n)) {
      var message_0 = 'byteCount (' + byteCount.toString() + ') < 0';
      throw IllegalArgumentException_init_$Create$(toString(message_0));
    }
    // Inline function 'kotlin.check' call
    if (!(this.c1j_1 == null || (this.c1j_1 === this.b1j_1.w1g_1 && this.d1j_1 === ensureNotNull(this.b1j_1.w1g_1).f1h_1))) {
      var message_1 = 'Peek source is invalid because upstream source was used';
      throw IllegalStateException_init_$Create$(toString(message_1));
    }
    if (byteCount === 0n)
      return 0n;
    // Inline function 'kotlin.Long.plus' call
    var this_0 = this.f1j_1;
    var tmp$ret$7 = add(this_0, fromInt(1));
    if (!this.a1j_1.c1h(tmp$ret$7))
      return -1n;
    if (this.c1j_1 == null && !(this.b1j_1.w1g_1 == null)) {
      this.c1j_1 = this.b1j_1.w1g_1;
      this.d1j_1 = ensureNotNull(this.b1j_1.w1g_1).f1h_1;
    }
    // Inline function 'kotlin.comparisons.minOf' call
    var b = subtract(this.b1j_1.e1(), this.f1j_1);
    var toCopy = byteCount <= b ? byteCount : b;
    this.b1j_1.q1h(sink, this.f1j_1, add(this.f1j_1, toCopy));
    this.f1j_1 = add(this.f1j_1, toCopy);
    return toCopy;
  };
  protoOf(PeekSource).f4 = function () {
    this.e1j_1 = true;
  };
  function RealSource(source) {
    this.g1j_1 = source;
    this.h1j_1 = false;
    this.i1j_1 = new Buffer();
  }
  protoOf(RealSource).z1g = function () {
    return this.i1j_1;
  };
  protoOf(RealSource).a1i = function (sink, byteCount) {
    // Inline function 'kotlinx.io.RealSource.checkNotClosed' call
    // Inline function 'kotlin.check' call
    if (!!this.h1j_1) {
      var message = 'Source is closed.';
      throw IllegalStateException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.require' call
    if (!(byteCount >= 0n)) {
      var message_0 = 'byteCount: ' + byteCount.toString();
      throw IllegalArgumentException_init_$Create$(toString(message_0));
    }
    if (this.i1j_1.e1() === 0n) {
      var read = this.g1j_1.a1i(this.i1j_1, 8192n);
      if (read === -1n)
        return -1n;
    }
    // Inline function 'kotlin.comparisons.minOf' call
    var b = this.i1j_1.e1();
    var toRead = byteCount <= b ? byteCount : b;
    return this.i1j_1.a1i(sink, toRead);
  };
  protoOf(RealSource).a1h = function () {
    // Inline function 'kotlinx.io.RealSource.checkNotClosed' call
    // Inline function 'kotlin.check' call
    if (!!this.h1j_1) {
      var message = 'Source is closed.';
      throw IllegalStateException_init_$Create$(toString(message));
    }
    return this.i1j_1.a1h() && this.g1j_1.a1i(this.i1j_1, 8192n) === -1n;
  };
  protoOf(RealSource).b1h = function (byteCount) {
    if (!this.c1h(byteCount))
      throw EOFException_init_$Create$_0("Source doesn't contain required number of bytes (" + byteCount.toString() + ').');
  };
  protoOf(RealSource).c1h = function (byteCount) {
    // Inline function 'kotlinx.io.RealSource.checkNotClosed' call
    // Inline function 'kotlin.check' call
    if (!!this.h1j_1) {
      var message = 'Source is closed.';
      throw IllegalStateException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.require' call
    if (!(byteCount >= 0n)) {
      var message_0 = 'byteCount: ' + byteCount.toString();
      throw IllegalArgumentException_init_$Create$(toString(message_0));
    }
    while (this.i1j_1.e1() < byteCount) {
      if (this.g1j_1.a1i(this.i1j_1, 8192n) === -1n)
        return false;
    }
    return true;
  };
  protoOf(RealSource).d1h = function () {
    this.b1h(1n);
    return this.i1j_1.d1h();
  };
  protoOf(RealSource).y1h = function (sink, startIndex, endIndex) {
    // Inline function 'kotlinx.io.checkBounds' call
    var size = sink.length;
    checkBounds(fromInt(size), fromInt(startIndex), fromInt(endIndex));
    if (this.i1j_1.e1() === 0n) {
      var read = this.g1j_1.a1i(this.i1j_1, 8192n);
      if (read === -1n)
        return -1;
    }
    var tmp0 = endIndex - startIndex | 0;
    // Inline function 'kotlinx.io.minOf' call
    var b = this.i1j_1.e1();
    // Inline function 'kotlin.comparisons.minOf' call
    var a = fromInt(tmp0);
    var tmp$ret$1 = a <= b ? a : b;
    var toRead = convertToInt(tmp$ret$1);
    return this.i1j_1.y1h(sink, startIndex, startIndex + toRead | 0);
  };
  protoOf(RealSource).c1i = function (sink, byteCount) {
    try {
      this.b1h(byteCount);
    } catch ($p) {
      if ($p instanceof EOFException) {
        var e = $p;
        sink.b1i(this.i1j_1, this.i1j_1.e1());
        throw e;
      } else {
        throw $p;
      }
    }
    this.i1j_1.c1i(sink, byteCount);
  };
  protoOf(RealSource).d1i = function (sink) {
    var totalBytesWritten = 0n;
    while (!(this.g1j_1.a1i(this.i1j_1, 8192n) === -1n)) {
      var emitByteCount = this.i1j_1.u1h();
      if (emitByteCount > 0n) {
        totalBytesWritten = add(totalBytesWritten, emitByteCount);
        sink.b1i(this.i1j_1, emitByteCount);
      }
    }
    if (this.i1j_1.e1() > 0n) {
      totalBytesWritten = add(totalBytesWritten, this.i1j_1.e1());
      sink.b1i(this.i1j_1, this.i1j_1.e1());
    }
    return totalBytesWritten;
  };
  protoOf(RealSource).n1h = function () {
    this.b1h(2n);
    return this.i1j_1.n1h();
  };
  protoOf(RealSource).e1i = function () {
    // Inline function 'kotlinx.io.RealSource.checkNotClosed' call
    // Inline function 'kotlin.check' call
    if (!!this.h1j_1) {
      var message = 'Source is closed.';
      throw IllegalStateException_init_$Create$(toString(message));
    }
    return buffered(new PeekSource(this));
  };
  protoOf(RealSource).f4 = function () {
    if (this.h1j_1)
      return Unit_instance;
    this.h1j_1 = true;
    this.g1j_1.f4();
    this.i1j_1.y2();
  };
  protoOf(RealSource).toString = function () {
    return 'buffered(' + toString(this.g1j_1) + ')';
  };
  function Segment_init_$Init$($this) {
    Segment.call($this);
    $this.e1h_1 = new Int8Array(8192);
    $this.i1h_1 = true;
    $this.h1h_1 = null;
    return $this;
  }
  function Segment_init_$Create$() {
    return Segment_init_$Init$(objectCreate(protoOf(Segment)));
  }
  function Segment_init_$Init$_0(data, pos, limit, shareToken, owner, $this) {
    Segment.call($this);
    $this.e1h_1 = data;
    $this.f1h_1 = pos;
    $this.g1h_1 = limit;
    $this.h1h_1 = shareToken;
    $this.i1h_1 = owner;
    return $this;
  }
  function Segment_init_$Create$_0(data, pos, limit, shareToken, owner) {
    return Segment_init_$Init$_0(data, pos, limit, shareToken, owner, objectCreate(protoOf(Segment)));
  }
  function Companion() {
    this.j1j_1 = 8192;
    this.k1j_1 = 1024;
  }
  protoOf(Companion).l1j = function () {
    return Segment_init_$Create$();
  };
  var Companion_instance;
  function Companion_getInstance() {
    return Companion_instance;
  }
  protoOf(Segment).o1i = function () {
    var tmp0_safe_receiver = this.h1h_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.m1j();
    return tmp1_elvis_lhs == null ? false : tmp1_elvis_lhs;
  };
  protoOf(Segment).r1h = function () {
    var tmp0_elvis_lhs = this.h1h_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      // Inline function 'kotlin.also' call
      var this_0 = SegmentPool_instance.n1j();
      this.h1h_1 = this_0;
      tmp = this_0;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var t = tmp;
    var tmp_0 = this.f1h_1;
    var tmp_1 = this.g1h_1;
    // Inline function 'kotlin.also' call
    t.o1j();
    return Segment_init_$Create$_0(this.e1h_1, tmp_0, tmp_1, t, false);
  };
  protoOf(Segment).r1i = function () {
    var result = this.j1h_1;
    if (!(this.k1h_1 == null)) {
      ensureNotNull(this.k1h_1).j1h_1 = this.j1h_1;
    }
    if (!(this.j1h_1 == null)) {
      ensureNotNull(this.j1h_1).k1h_1 = this.k1h_1;
    }
    this.j1h_1 = null;
    this.k1h_1 = null;
    return result;
  };
  protoOf(Segment).s1h = function (segment) {
    segment.k1h_1 = this;
    segment.j1h_1 = this.j1h_1;
    if (!(this.j1h_1 == null)) {
      ensureNotNull(this.j1h_1).k1h_1 = segment;
    }
    this.j1h_1 = segment;
    return segment;
  };
  protoOf(Segment).p1i = function (byteCount) {
    // Inline function 'kotlin.require' call
    if (!(byteCount > 0 && byteCount <= (this.g1h_1 - this.f1h_1 | 0))) {
      var message = 'byteCount out of range';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    var prefix;
    if (byteCount >= 1024) {
      prefix = this.r1h();
    } else {
      prefix = SegmentPool_instance.i1i();
      var tmp0 = this.e1h_1;
      var tmp2 = prefix.e1h_1;
      var tmp5 = this.f1h_1;
      // Inline function 'kotlin.collections.copyInto' call
      var endIndex = this.f1h_1 + byteCount | 0;
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp = tmp0;
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      arrayCopy(tmp, tmp2, 0, tmp5, endIndex);
    }
    prefix.g1h_1 = prefix.f1h_1 + byteCount | 0;
    this.f1h_1 = this.f1h_1 + byteCount | 0;
    if (!(this.k1h_1 == null)) {
      ensureNotNull(this.k1h_1).s1h(prefix);
    } else {
      prefix.j1h_1 = this;
      this.k1h_1 = prefix;
    }
    return prefix;
  };
  protoOf(Segment).t1h = function () {
    // Inline function 'kotlin.check' call
    if (!!(this.k1h_1 == null)) {
      var message = 'cannot compact';
      throw IllegalStateException_init_$Create$(toString(message));
    }
    if (!ensureNotNull(this.k1h_1).i1h_1)
      return this;
    var byteCount = this.g1h_1 - this.f1h_1 | 0;
    var availableByteCount = (8192 - ensureNotNull(this.k1h_1).g1h_1 | 0) + (ensureNotNull(this.k1h_1).o1i() ? 0 : ensureNotNull(this.k1h_1).f1h_1) | 0;
    if (byteCount > availableByteCount)
      return this;
    var predecessor = this.k1h_1;
    this.q1i(ensureNotNull(predecessor), byteCount);
    var successor = this.r1i();
    // Inline function 'kotlin.check' call
    if (!(successor == null)) {
      throw IllegalStateException_init_$Create$('Check failed.');
    }
    SegmentPool_instance.y1i(this);
    return predecessor;
  };
  protoOf(Segment).u1i = function (byte) {
    var _unary__edvuaz = this.g1h_1;
    this.g1h_1 = _unary__edvuaz + 1 | 0;
    this.e1h_1[_unary__edvuaz] = byte;
  };
  protoOf(Segment).w1i = function (short) {
    var data = this.e1h_1;
    var limit = this.g1h_1;
    var _unary__edvuaz = limit;
    limit = _unary__edvuaz + 1 | 0;
    data[_unary__edvuaz] = toByte((short >>> 8 | 0) & 255);
    var _unary__edvuaz_0 = limit;
    limit = _unary__edvuaz_0 + 1 | 0;
    data[_unary__edvuaz_0] = toByte(short & 255);
    this.g1h_1 = limit;
  };
  protoOf(Segment).m1h = function () {
    var _unary__edvuaz = this.f1h_1;
    this.f1h_1 = _unary__edvuaz + 1 | 0;
    return this.e1h_1[_unary__edvuaz];
  };
  protoOf(Segment).o1h = function () {
    var data = this.e1h_1;
    var pos = this.f1h_1;
    var _unary__edvuaz = pos;
    pos = _unary__edvuaz + 1 | 0;
    // Inline function 'kotlinx.io.and' call
    var tmp = (data[_unary__edvuaz] & 255) << 8;
    var _unary__edvuaz_0 = pos;
    pos = _unary__edvuaz_0 + 1 | 0;
    // Inline function 'kotlinx.io.and' call
    var tmp$ret$1 = data[_unary__edvuaz_0] & 255;
    var s = toShort(tmp | tmp$ret$1);
    this.f1h_1 = pos;
    return s;
  };
  protoOf(Segment).q1i = function (sink, byteCount) {
    // Inline function 'kotlin.check' call
    if (!sink.i1h_1) {
      var message = 'only owner can write';
      throw IllegalStateException_init_$Create$(toString(message));
    }
    if ((sink.g1h_1 + byteCount | 0) > 8192) {
      if (sink.o1i())
        throw IllegalArgumentException_init_$Create$_0();
      if (((sink.g1h_1 + byteCount | 0) - sink.f1h_1 | 0) > 8192)
        throw IllegalArgumentException_init_$Create$_0();
      var tmp0 = sink.e1h_1;
      var tmp2 = sink.e1h_1;
      var tmp5 = sink.f1h_1;
      // Inline function 'kotlin.collections.copyInto' call
      var endIndex = sink.g1h_1;
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp = tmp0;
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      arrayCopy(tmp, tmp2, 0, tmp5, endIndex);
      sink.g1h_1 = sink.g1h_1 - sink.f1h_1 | 0;
      sink.f1h_1 = 0;
    }
    var tmp0_0 = this.e1h_1;
    var tmp2_0 = sink.e1h_1;
    var tmp4 = sink.g1h_1;
    var tmp6 = this.f1h_1;
    // Inline function 'kotlin.collections.copyInto' call
    var endIndex_0 = this.f1h_1 + byteCount | 0;
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_0 = tmp0_0;
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    arrayCopy(tmp_0, tmp2_0, tmp4, tmp6, endIndex_0);
    sink.g1h_1 = sink.g1h_1 + byteCount | 0;
    this.f1h_1 = this.f1h_1 + byteCount | 0;
  };
  protoOf(Segment).z1h = function (dst, dstStartOffset, dstEndOffset) {
    var len = dstEndOffset - dstStartOffset | 0;
    var tmp0 = this.e1h_1;
    var tmp6 = this.f1h_1;
    // Inline function 'kotlin.collections.copyInto' call
    var endIndex = this.f1h_1 + len | 0;
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp = tmp0;
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    arrayCopy(tmp, dst, dstStartOffset, tmp6, endIndex);
    this.f1h_1 = this.f1h_1 + len | 0;
  };
  protoOf(Segment).l1i = function (src, srcStartOffset, srcEndOffset) {
    var tmp2 = this.e1h_1;
    // Inline function 'kotlin.collections.copyInto' call
    var destinationOffset = this.g1h_1;
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp = src;
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    arrayCopy(tmp, tmp2, destinationOffset, srcStartOffset, srcEndOffset);
    this.g1h_1 = this.g1h_1 + (srcEndOffset - srcStartOffset | 0) | 0;
  };
  protoOf(Segment).e1 = function () {
    return this.g1h_1 - this.f1h_1 | 0;
  };
  protoOf(Segment).k1i = function () {
    return this.e1h_1.length - this.g1h_1 | 0;
  };
  protoOf(Segment).p1j = function (readOnly) {
    return this.e1h_1;
  };
  protoOf(Segment).w1h = function (index) {
    return this.e1h_1[this.f1h_1 + index | 0];
  };
  protoOf(Segment).q1j = function (index, value) {
    this.e1h_1[this.g1h_1 + index | 0] = value;
  };
  protoOf(Segment).r1j = function (index, b0, b1) {
    var d = this.e1h_1;
    var l = this.g1h_1;
    d[l + index | 0] = b0;
    d[(l + index | 0) + 1 | 0] = b1;
  };
  protoOf(Segment).s1j = function (index, b0, b1, b2) {
    var d = this.e1h_1;
    var l = this.g1h_1;
    d[l + index | 0] = b0;
    d[(l + index | 0) + 1 | 0] = b1;
    d[(l + index | 0) + 2 | 0] = b2;
  };
  protoOf(Segment).t1j = function (index, b0, b1, b2, b3) {
    var d = this.e1h_1;
    var l = this.g1h_1;
    d[l + index | 0] = b0;
    d[(l + index | 0) + 1 | 0] = b1;
    d[(l + index | 0) + 2 | 0] = b2;
    d[(l + index | 0) + 3 | 0] = b3;
  };
  function Segment() {
    this.f1h_1 = 0;
    this.g1h_1 = 0;
    this.h1h_1 = null;
    this.i1h_1 = false;
    this.j1h_1 = null;
    this.k1h_1 = null;
  }
  function isEmpty(_this__u8e3s4) {
    return _this__u8e3s4.e1() === 0;
  }
  function SegmentCopyTracker() {
  }
  function AlwaysSharedCopyTracker() {
    AlwaysSharedCopyTracker_instance = this;
    SegmentCopyTracker.call(this);
  }
  protoOf(AlwaysSharedCopyTracker).m1j = function () {
    return true;
  };
  protoOf(AlwaysSharedCopyTracker).o1j = function () {
    return Unit_instance;
  };
  var AlwaysSharedCopyTracker_instance;
  function AlwaysSharedCopyTracker_getInstance() {
    if (AlwaysSharedCopyTracker_instance == null)
      new AlwaysSharedCopyTracker();
    return AlwaysSharedCopyTracker_instance;
  }
  function indexOf_0(_this__u8e3s4, byte, startOffset, endOffset) {
    // Inline function 'kotlin.require' call
    if (!(0 <= startOffset ? startOffset < _this__u8e3s4.e1() : false)) {
      var message = '' + startOffset;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.require' call
    if (!(startOffset <= endOffset ? endOffset <= _this__u8e3s4.e1() : false)) {
      var message_0 = '' + endOffset;
      throw IllegalArgumentException_init_$Create$(toString(message_0));
    }
    var p = _this__u8e3s4.f1h_1;
    var data = _this__u8e3s4.p1j(true);
    var inductionVariable = startOffset;
    if (inductionVariable < endOffset)
      do {
        var idx = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if (data[p + idx | 0] === byte) {
          return idx;
        }
      }
       while (inductionVariable < endOffset);
    return -1;
  }
  function Sink() {
  }
  function Source() {
  }
  function readByteArray(_this__u8e3s4) {
    return readByteArrayImpl(_this__u8e3s4, -1);
  }
  function readByteArray_0(_this__u8e3s4, byteCount) {
    // Inline function 'kotlinx.io.checkByteCount' call
    var byteCount_0 = fromInt(byteCount);
    // Inline function 'kotlin.require' call
    if (!(byteCount_0 >= 0n)) {
      var message = 'byteCount (' + byteCount_0.toString() + ') < 0';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    return readByteArrayImpl(_this__u8e3s4, byteCount);
  }
  function indexOf_1(_this__u8e3s4, byte, startIndex, endIndex) {
    startIndex = startIndex === VOID ? 0n : startIndex;
    endIndex = endIndex === VOID ? 9223372036854775807n : endIndex;
    // Inline function 'kotlin.require' call
    if (!(0n <= startIndex ? startIndex <= endIndex : false)) {
      var tmp;
      if (endIndex < 0n) {
        tmp = 'startIndex (' + startIndex.toString() + ') and endIndex (' + endIndex.toString() + ') should be non negative';
      } else {
        tmp = 'startIndex (' + startIndex.toString() + ') is not within the range [0..endIndex(' + endIndex.toString() + '))';
      }
      var message = tmp;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    if (startIndex === endIndex)
      return -1n;
    var offset = startIndex;
    $l$loop: while (true) {
      var tmp_0;
      if (offset < endIndex) {
        // Inline function 'kotlin.Long.plus' call
        var this_0 = offset;
        var tmp$ret$2 = add(this_0, fromInt(1));
        tmp_0 = _this__u8e3s4.c1h(tmp$ret$2);
      } else {
        tmp_0 = false;
      }
      if (!tmp_0) {
        break $l$loop;
      }
      var tmp_1 = _this__u8e3s4.z1g();
      var tmp_2 = offset;
      // Inline function 'kotlin.comparisons.minOf' call
      var b = _this__u8e3s4.z1g().e1();
      var tmp$ret$3 = endIndex <= b ? endIndex : b;
      var idx = indexOf(tmp_1, byte, tmp_2, tmp$ret$3);
      if (!(idx === -1n)) {
        return idx;
      }
      offset = _this__u8e3s4.z1g().e1();
    }
    return -1n;
  }
  function readByteArrayImpl(_this__u8e3s4, size) {
    var arraySize = size;
    if (size === -1) {
      var fetchSize = 2147483647n;
      while (_this__u8e3s4.z1g().e1() < 2147483647n && _this__u8e3s4.c1h(fetchSize)) {
        // Inline function 'kotlin.Long.times' call
        var this_0 = fetchSize;
        fetchSize = multiply(this_0, fromInt(2));
      }
      // Inline function 'kotlin.check' call
      if (!(_this__u8e3s4.z1g().e1() < 2147483647n)) {
        var message = "Can't create an array of size " + _this__u8e3s4.z1g().e1().toString();
        throw IllegalStateException_init_$Create$(toString(message));
      }
      arraySize = convertToInt(_this__u8e3s4.z1g().e1());
    } else {
      _this__u8e3s4.b1h(fromInt(size));
    }
    var array = new Int8Array(arraySize);
    readTo(_this__u8e3s4.z1g(), array);
    return array;
  }
  function readTo(_this__u8e3s4, sink, startIndex, endIndex) {
    startIndex = startIndex === VOID ? 0 : startIndex;
    endIndex = endIndex === VOID ? sink.length : endIndex;
    // Inline function 'kotlinx.io.checkBounds' call
    var size = sink.length;
    checkBounds(fromInt(size), fromInt(startIndex), fromInt(endIndex));
    var offset = startIndex;
    while (offset < endIndex) {
      var bytesRead = _this__u8e3s4.y1h(sink, offset, endIndex);
      if (bytesRead === -1) {
        throw EOFException_init_$Create$_0('Source exhausted before reading ' + (endIndex - startIndex | 0) + ' bytes. ' + ('Only ' + bytesRead + ' bytes were read.'));
      }
      offset = offset + bytesRead | 0;
    }
  }
  function readString(_this__u8e3s4, byteCount) {
    _this__u8e3s4.b1h(byteCount);
    return commonReadUtf8(_this__u8e3s4.z1g(), byteCount);
  }
  function readString_0(_this__u8e3s4) {
    _this__u8e3s4.c1h(9223372036854775807n);
    return commonReadUtf8(_this__u8e3s4.z1g(), _this__u8e3s4.z1g().e1());
  }
  function writeString(_this__u8e3s4, string, startIndex, endIndex) {
    startIndex = startIndex === VOID ? 0 : startIndex;
    endIndex = endIndex === VOID ? string.length : endIndex;
    // Inline function 'kotlinx.io.checkBounds' call
    var size = string.length;
    checkBounds(fromInt(size), fromInt(startIndex), fromInt(endIndex));
    // Inline function 'kotlinx.io.writeToInternalBuffer' call
    // Inline function 'kotlinx.io.commonWriteUtf8' call
    var this_0 = _this__u8e3s4.z1g();
    var i = startIndex;
    while (i < endIndex) {
      var p0 = i;
      // Inline function 'kotlin.code' call
      var this_1 = charCodeAt(string, p0);
      var c = Char__toInt_impl_vasixd(this_1);
      if (c < 128) {
        $l$block_0: {
          // Inline function 'kotlinx.io.unsafe.UnsafeBufferOperations.writeToTail' call
          var tail = this_0.f1i(1);
          var ctx = get_SegmentWriteContextImpl();
          var segmentOffset = -i | 0;
          // Inline function 'kotlin.comparisons.minOf' call
          var b = i + tail.k1i() | 0;
          var runLimit = Math.min(endIndex, b);
          var _unary__edvuaz = i;
          i = _unary__edvuaz + 1 | 0;
          ctx.x1j(tail, segmentOffset + _unary__edvuaz | 0, toByte(c));
          $l$loop: while (i < runLimit) {
            var p0_0 = i;
            // Inline function 'kotlin.code' call
            var this_2 = charCodeAt(string, p0_0);
            c = Char__toInt_impl_vasixd(this_2);
            if (c >= 128)
              break $l$loop;
            var _unary__edvuaz_0 = i;
            i = _unary__edvuaz_0 + 1 | 0;
            ctx.x1j(tail, segmentOffset + _unary__edvuaz_0 | 0, toByte(c));
          }
          var bytesWritten = i + segmentOffset | 0;
          if (bytesWritten === 1) {
            tail.g1h_1 = tail.g1h_1 + bytesWritten | 0;
            var tmp = this_0;
            // Inline function 'kotlin.Long.plus' call
            var this_3 = this_0.y1g_1;
            tmp.y1g_1 = add(this_3, fromInt(bytesWritten));
            break $l$block_0;
          }
          // Inline function 'kotlin.check' call
          if (!(0 <= bytesWritten ? bytesWritten <= tail.k1i() : false)) {
            var message = 'Invalid number of bytes written: ' + bytesWritten + '. Should be in 0..' + tail.k1i();
            throw IllegalStateException_init_$Create$(toString(message));
          }
          if (!(bytesWritten === 0)) {
            tail.g1h_1 = tail.g1h_1 + bytesWritten | 0;
            var tmp_0 = this_0;
            // Inline function 'kotlin.Long.plus' call
            var this_4 = this_0.y1g_1;
            tmp_0.y1g_1 = add(this_4, fromInt(bytesWritten));
            break $l$block_0;
          }
          if (isEmpty(tail)) {
            this_0.z1i();
          }
        }
      } else if (c < 2048) {
        $l$block_2: {
          // Inline function 'kotlinx.io.unsafe.UnsafeBufferOperations.writeToTail' call
          var tail_0 = this_0.f1i(2);
          get_SegmentWriteContextImpl().w1j(tail_0, 0, toByte(c >> 6 | 192), toByte(c & 63 | 128));
          var bytesWritten_0 = 2;
          if (bytesWritten_0 === 2) {
            tail_0.g1h_1 = tail_0.g1h_1 + bytesWritten_0 | 0;
            var tmp_1 = this_0;
            // Inline function 'kotlin.Long.plus' call
            var this_5 = this_0.y1g_1;
            tmp_1.y1g_1 = add(this_5, fromInt(bytesWritten_0));
            break $l$block_2;
          }
          // Inline function 'kotlin.check' call
          if (!(0 <= bytesWritten_0 ? bytesWritten_0 <= tail_0.k1i() : false)) {
            var message_0 = 'Invalid number of bytes written: ' + bytesWritten_0 + '. Should be in 0..' + tail_0.k1i();
            throw IllegalStateException_init_$Create$(toString(message_0));
          }
          if (!(bytesWritten_0 === 0)) {
            tail_0.g1h_1 = tail_0.g1h_1 + bytesWritten_0 | 0;
            var tmp_2 = this_0;
            // Inline function 'kotlin.Long.plus' call
            var this_6 = this_0.y1g_1;
            tmp_2.y1g_1 = add(this_6, fromInt(bytesWritten_0));
            break $l$block_2;
          }
          if (isEmpty(tail_0)) {
            this_0.z1i();
          }
        }
        i = i + 1 | 0;
      } else if (c < 55296 || c > 57343) {
        $l$block_4: {
          // Inline function 'kotlinx.io.unsafe.UnsafeBufferOperations.writeToTail' call
          var tail_1 = this_0.f1i(3);
          get_SegmentWriteContextImpl().v1j(tail_1, 0, toByte(c >> 12 | 224), toByte(c >> 6 & 63 | 128), toByte(c & 63 | 128));
          var bytesWritten_1 = 3;
          if (bytesWritten_1 === 3) {
            tail_1.g1h_1 = tail_1.g1h_1 + bytesWritten_1 | 0;
            var tmp_3 = this_0;
            // Inline function 'kotlin.Long.plus' call
            var this_7 = this_0.y1g_1;
            tmp_3.y1g_1 = add(this_7, fromInt(bytesWritten_1));
            break $l$block_4;
          }
          // Inline function 'kotlin.check' call
          if (!(0 <= bytesWritten_1 ? bytesWritten_1 <= tail_1.k1i() : false)) {
            var message_1 = 'Invalid number of bytes written: ' + bytesWritten_1 + '. Should be in 0..' + tail_1.k1i();
            throw IllegalStateException_init_$Create$(toString(message_1));
          }
          if (!(bytesWritten_1 === 0)) {
            tail_1.g1h_1 = tail_1.g1h_1 + bytesWritten_1 | 0;
            var tmp_4 = this_0;
            // Inline function 'kotlin.Long.plus' call
            var this_8 = this_0.y1g_1;
            tmp_4.y1g_1 = add(this_8, fromInt(bytesWritten_1));
            break $l$block_4;
          }
          if (isEmpty(tail_1)) {
            this_0.z1i();
          }
        }
        i = i + 1 | 0;
      } else {
        var tmp_5;
        if ((i + 1 | 0) < endIndex) {
          var p0_1 = i + 1 | 0;
          // Inline function 'kotlin.code' call
          var this_9 = charCodeAt(string, p0_1);
          tmp_5 = Char__toInt_impl_vasixd(this_9);
        } else {
          tmp_5 = 0;
        }
        var low = tmp_5;
        if (c > 56319 || !(56320 <= low ? low <= 57343 : false)) {
          // Inline function 'kotlin.code' call
          var this_10 = _Char___init__impl__6a9atx(63);
          var tmp$ret$29 = Char__toInt_impl_vasixd(this_10);
          this_0.t1i(toByte(tmp$ret$29));
          i = i + 1 | 0;
        } else {
          var codePoint = 65536 + ((c & 1023) << 10 | low & 1023) | 0;
          $l$block_6: {
            // Inline function 'kotlinx.io.unsafe.UnsafeBufferOperations.writeToTail' call
            var tail_2 = this_0.f1i(4);
            get_SegmentWriteContextImpl().u1j(tail_2, 0, toByte(codePoint >> 18 | 240), toByte(codePoint >> 12 & 63 | 128), toByte(codePoint >> 6 & 63 | 128), toByte(codePoint & 63 | 128));
            var bytesWritten_2 = 4;
            if (bytesWritten_2 === 4) {
              tail_2.g1h_1 = tail_2.g1h_1 + bytesWritten_2 | 0;
              var tmp_6 = this_0;
              // Inline function 'kotlin.Long.plus' call
              var this_11 = this_0.y1g_1;
              tmp_6.y1g_1 = add(this_11, fromInt(bytesWritten_2));
              break $l$block_6;
            }
            // Inline function 'kotlin.check' call
            if (!(0 <= bytesWritten_2 ? bytesWritten_2 <= tail_2.k1i() : false)) {
              var message_2 = 'Invalid number of bytes written: ' + bytesWritten_2 + '. Should be in 0..' + tail_2.k1i();
              throw IllegalStateException_init_$Create$(toString(message_2));
            }
            if (!(bytesWritten_2 === 0)) {
              tail_2.g1h_1 = tail_2.g1h_1 + bytesWritten_2 | 0;
              var tmp_7 = this_0;
              // Inline function 'kotlin.Long.plus' call
              var this_12 = this_0.y1g_1;
              tmp_7.y1g_1 = add(this_12, fromInt(bytesWritten_2));
              break $l$block_6;
            }
            if (isEmpty(tail_2)) {
              this_0.z1i();
            }
          }
          i = i + 2 | 0;
        }
      }
    }
    _this__u8e3s4.p1h();
  }
  function commonReadUtf8(_this__u8e3s4, byteCount) {
    if (byteCount === 0n)
      return '';
    // Inline function 'kotlinx.io.unsafe.UnsafeBufferOperations.forEachSegment' call
    var curr = _this__u8e3s4.w1g_1;
    while (!(curr == null)) {
      get_SegmentReadContextImpl();
      if (fromInt(curr.e1()) >= byteCount) {
        var result = '';
        // Inline function 'kotlinx.io.unsafe.withData' call
        var tmp0 = curr.p1j(true);
        var tmp2 = curr.f1h_1;
        var tmp0_0 = curr.g1h_1;
        // Inline function 'kotlin.math.min' call
        var b = tmp2 + convertToInt(byteCount) | 0;
        var tmp$ret$4 = Math.min(tmp0_0, b);
        result = commonToUtf8String(tmp0, tmp2, tmp$ret$4);
        _this__u8e3s4.x1h(byteCount);
        return result;
      }
      return commonToUtf8String(readByteArray_0(_this__u8e3s4, convertToInt(byteCount)));
    }
    // Inline function 'kotlin.error' call
    var message = 'Unreacheable';
    throw IllegalStateException_init_$Create$(toString(message));
  }
  function commonToUtf8String(_this__u8e3s4, beginIndex, endIndex) {
    beginIndex = beginIndex === VOID ? 0 : beginIndex;
    endIndex = endIndex === VOID ? _this__u8e3s4.length : endIndex;
    if (beginIndex < 0 || endIndex > _this__u8e3s4.length || beginIndex > endIndex) {
      throw IndexOutOfBoundsException_init_$Create$('size=' + _this__u8e3s4.length + ' beginIndex=' + beginIndex + ' endIndex=' + endIndex);
    }
    var chars = charArray(endIndex - beginIndex | 0);
    var length = 0;
    // Inline function 'kotlinx.io.internal.processUtf16Chars' call
    var index = beginIndex;
    while (index < endIndex) {
      var b0 = _this__u8e3s4[index];
      if (b0 >= 0) {
        var c = numberToChar(b0);
        var _unary__edvuaz = length;
        length = _unary__edvuaz + 1 | 0;
        chars[_unary__edvuaz] = c;
        index = index + 1 | 0;
        while (index < endIndex && _this__u8e3s4[index] >= 0) {
          var _unary__edvuaz_0 = index;
          index = _unary__edvuaz_0 + 1 | 0;
          var c_0 = numberToChar(_this__u8e3s4[_unary__edvuaz_0]);
          var _unary__edvuaz_1 = length;
          length = _unary__edvuaz_1 + 1 | 0;
          chars[_unary__edvuaz_1] = c_0;
        }
      } else {
        // Inline function 'kotlinx.io.shr' call
        if (b0 >> 5 === -2) {
          var tmp = index;
          var tmp2 = index;
          var tmp$ret$4;
          $l$block_0: {
            // Inline function 'kotlinx.io.internal.process2Utf8Bytes' call
            if (endIndex <= (tmp2 + 1 | 0)) {
              var c_1 = numberToChar(65533);
              var _unary__edvuaz_2 = length;
              length = _unary__edvuaz_2 + 1 | 0;
              chars[_unary__edvuaz_2] = c_1;
              tmp$ret$4 = 1;
              break $l$block_0;
            }
            var b0_0 = _this__u8e3s4[tmp2];
            var b1 = _this__u8e3s4[tmp2 + 1 | 0];
            // Inline function 'kotlinx.io.internal.isUtf8Continuation' call
            // Inline function 'kotlinx.io.and' call
            if (!((b1 & 192) === 128)) {
              var c_2 = numberToChar(65533);
              var _unary__edvuaz_3 = length;
              length = _unary__edvuaz_3 + 1 | 0;
              chars[_unary__edvuaz_3] = c_2;
              tmp$ret$4 = 1;
              break $l$block_0;
            }
            var codePoint = 3968 ^ b1 ^ b0_0 << 6;
            if (codePoint < 128) {
              var c_3 = numberToChar(65533);
              var _unary__edvuaz_4 = length;
              length = _unary__edvuaz_4 + 1 | 0;
              chars[_unary__edvuaz_4] = c_3;
            } else {
              var c_4 = numberToChar(codePoint);
              var _unary__edvuaz_5 = length;
              length = _unary__edvuaz_5 + 1 | 0;
              chars[_unary__edvuaz_5] = c_4;
            }
            tmp$ret$4 = 2;
          }
          index = tmp + tmp$ret$4 | 0;
        } else {
          // Inline function 'kotlinx.io.shr' call
          if (b0 >> 4 === -2) {
            var tmp_0 = index;
            var tmp2_0 = index;
            var tmp$ret$16;
            $l$block_4: {
              // Inline function 'kotlinx.io.internal.process3Utf8Bytes' call
              if (endIndex <= (tmp2_0 + 2 | 0)) {
                var c_5 = numberToChar(65533);
                var _unary__edvuaz_6 = length;
                length = _unary__edvuaz_6 + 1 | 0;
                chars[_unary__edvuaz_6] = c_5;
                var tmp_1;
                if (endIndex <= (tmp2_0 + 1 | 0)) {
                  tmp_1 = true;
                } else {
                  // Inline function 'kotlinx.io.internal.isUtf8Continuation' call
                  // Inline function 'kotlinx.io.and' call
                  tmp_1 = !((_this__u8e3s4[tmp2_0 + 1 | 0] & 192) === 128);
                }
                if (tmp_1) {
                  tmp$ret$16 = 1;
                  break $l$block_4;
                } else {
                  tmp$ret$16 = 2;
                  break $l$block_4;
                }
              }
              var b0_1 = _this__u8e3s4[tmp2_0];
              var b1_0 = _this__u8e3s4[tmp2_0 + 1 | 0];
              // Inline function 'kotlinx.io.internal.isUtf8Continuation' call
              // Inline function 'kotlinx.io.and' call
              if (!((b1_0 & 192) === 128)) {
                var c_6 = numberToChar(65533);
                var _unary__edvuaz_7 = length;
                length = _unary__edvuaz_7 + 1 | 0;
                chars[_unary__edvuaz_7] = c_6;
                tmp$ret$16 = 1;
                break $l$block_4;
              }
              var b2 = _this__u8e3s4[tmp2_0 + 2 | 0];
              // Inline function 'kotlinx.io.internal.isUtf8Continuation' call
              // Inline function 'kotlinx.io.and' call
              if (!((b2 & 192) === 128)) {
                var c_7 = numberToChar(65533);
                var _unary__edvuaz_8 = length;
                length = _unary__edvuaz_8 + 1 | 0;
                chars[_unary__edvuaz_8] = c_7;
                tmp$ret$16 = 2;
                break $l$block_4;
              }
              var codePoint_0 = -123008 ^ b2 ^ b1_0 << 6 ^ b0_1 << 12;
              if (codePoint_0 < 2048) {
                var c_8 = numberToChar(65533);
                var _unary__edvuaz_9 = length;
                length = _unary__edvuaz_9 + 1 | 0;
                chars[_unary__edvuaz_9] = c_8;
              } else if (55296 <= codePoint_0 ? codePoint_0 <= 57343 : false) {
                var c_9 = numberToChar(65533);
                var _unary__edvuaz_10 = length;
                length = _unary__edvuaz_10 + 1 | 0;
                chars[_unary__edvuaz_10] = c_9;
              } else {
                var c_10 = numberToChar(codePoint_0);
                var _unary__edvuaz_11 = length;
                length = _unary__edvuaz_11 + 1 | 0;
                chars[_unary__edvuaz_11] = c_10;
              }
              tmp$ret$16 = 3;
            }
            index = tmp_0 + tmp$ret$16 | 0;
          } else {
            // Inline function 'kotlinx.io.shr' call
            if (b0 >> 3 === -2) {
              var tmp_2 = index;
              var tmp2_1 = index;
              var tmp$ret$36;
              $l$block_10: {
                // Inline function 'kotlinx.io.internal.process4Utf8Bytes' call
                if (endIndex <= (tmp2_1 + 3 | 0)) {
                  if (!(65533 === 65533)) {
                    var c_11 = numberToChar((65533 >>> 10 | 0) + 55232 | 0);
                    var _unary__edvuaz_12 = length;
                    length = _unary__edvuaz_12 + 1 | 0;
                    chars[_unary__edvuaz_12] = c_11;
                    var c_12 = numberToChar((65533 & 1023) + 56320 | 0);
                    var _unary__edvuaz_13 = length;
                    length = _unary__edvuaz_13 + 1 | 0;
                    chars[_unary__edvuaz_13] = c_12;
                  } else {
                    var c_13 = _Char___init__impl__6a9atx(65533);
                    var _unary__edvuaz_14 = length;
                    length = _unary__edvuaz_14 + 1 | 0;
                    chars[_unary__edvuaz_14] = c_13;
                  }
                  var tmp_3;
                  if (endIndex <= (tmp2_1 + 1 | 0)) {
                    tmp_3 = true;
                  } else {
                    // Inline function 'kotlinx.io.internal.isUtf8Continuation' call
                    // Inline function 'kotlinx.io.and' call
                    tmp_3 = !((_this__u8e3s4[tmp2_1 + 1 | 0] & 192) === 128);
                  }
                  if (tmp_3) {
                    tmp$ret$36 = 1;
                    break $l$block_10;
                  } else {
                    var tmp_4;
                    if (endIndex <= (tmp2_1 + 2 | 0)) {
                      tmp_4 = true;
                    } else {
                      // Inline function 'kotlinx.io.internal.isUtf8Continuation' call
                      // Inline function 'kotlinx.io.and' call
                      tmp_4 = !((_this__u8e3s4[tmp2_1 + 2 | 0] & 192) === 128);
                    }
                    if (tmp_4) {
                      tmp$ret$36 = 2;
                      break $l$block_10;
                    } else {
                      tmp$ret$36 = 3;
                      break $l$block_10;
                    }
                  }
                }
                var b0_2 = _this__u8e3s4[tmp2_1];
                var b1_1 = _this__u8e3s4[tmp2_1 + 1 | 0];
                // Inline function 'kotlinx.io.internal.isUtf8Continuation' call
                // Inline function 'kotlinx.io.and' call
                if (!((b1_1 & 192) === 128)) {
                  if (!(65533 === 65533)) {
                    var c_14 = numberToChar((65533 >>> 10 | 0) + 55232 | 0);
                    var _unary__edvuaz_15 = length;
                    length = _unary__edvuaz_15 + 1 | 0;
                    chars[_unary__edvuaz_15] = c_14;
                    var c_15 = numberToChar((65533 & 1023) + 56320 | 0);
                    var _unary__edvuaz_16 = length;
                    length = _unary__edvuaz_16 + 1 | 0;
                    chars[_unary__edvuaz_16] = c_15;
                  } else {
                    var c_16 = _Char___init__impl__6a9atx(65533);
                    var _unary__edvuaz_17 = length;
                    length = _unary__edvuaz_17 + 1 | 0;
                    chars[_unary__edvuaz_17] = c_16;
                  }
                  tmp$ret$36 = 1;
                  break $l$block_10;
                }
                var b2_0 = _this__u8e3s4[tmp2_1 + 2 | 0];
                // Inline function 'kotlinx.io.internal.isUtf8Continuation' call
                // Inline function 'kotlinx.io.and' call
                if (!((b2_0 & 192) === 128)) {
                  if (!(65533 === 65533)) {
                    var c_17 = numberToChar((65533 >>> 10 | 0) + 55232 | 0);
                    var _unary__edvuaz_18 = length;
                    length = _unary__edvuaz_18 + 1 | 0;
                    chars[_unary__edvuaz_18] = c_17;
                    var c_18 = numberToChar((65533 & 1023) + 56320 | 0);
                    var _unary__edvuaz_19 = length;
                    length = _unary__edvuaz_19 + 1 | 0;
                    chars[_unary__edvuaz_19] = c_18;
                  } else {
                    var c_19 = _Char___init__impl__6a9atx(65533);
                    var _unary__edvuaz_20 = length;
                    length = _unary__edvuaz_20 + 1 | 0;
                    chars[_unary__edvuaz_20] = c_19;
                  }
                  tmp$ret$36 = 2;
                  break $l$block_10;
                }
                var b3 = _this__u8e3s4[tmp2_1 + 3 | 0];
                // Inline function 'kotlinx.io.internal.isUtf8Continuation' call
                // Inline function 'kotlinx.io.and' call
                if (!((b3 & 192) === 128)) {
                  if (!(65533 === 65533)) {
                    var c_20 = numberToChar((65533 >>> 10 | 0) + 55232 | 0);
                    var _unary__edvuaz_21 = length;
                    length = _unary__edvuaz_21 + 1 | 0;
                    chars[_unary__edvuaz_21] = c_20;
                    var c_21 = numberToChar((65533 & 1023) + 56320 | 0);
                    var _unary__edvuaz_22 = length;
                    length = _unary__edvuaz_22 + 1 | 0;
                    chars[_unary__edvuaz_22] = c_21;
                  } else {
                    var c_22 = _Char___init__impl__6a9atx(65533);
                    var _unary__edvuaz_23 = length;
                    length = _unary__edvuaz_23 + 1 | 0;
                    chars[_unary__edvuaz_23] = c_22;
                  }
                  tmp$ret$36 = 3;
                  break $l$block_10;
                }
                var codePoint_1 = 3678080 ^ b3 ^ b2_0 << 6 ^ b1_1 << 12 ^ b0_2 << 18;
                if (codePoint_1 > 1114111) {
                  if (!(65533 === 65533)) {
                    var c_23 = numberToChar((65533 >>> 10 | 0) + 55232 | 0);
                    var _unary__edvuaz_24 = length;
                    length = _unary__edvuaz_24 + 1 | 0;
                    chars[_unary__edvuaz_24] = c_23;
                    var c_24 = numberToChar((65533 & 1023) + 56320 | 0);
                    var _unary__edvuaz_25 = length;
                    length = _unary__edvuaz_25 + 1 | 0;
                    chars[_unary__edvuaz_25] = c_24;
                  } else {
                    var c_25 = _Char___init__impl__6a9atx(65533);
                    var _unary__edvuaz_26 = length;
                    length = _unary__edvuaz_26 + 1 | 0;
                    chars[_unary__edvuaz_26] = c_25;
                  }
                } else if (55296 <= codePoint_1 ? codePoint_1 <= 57343 : false) {
                  if (!(65533 === 65533)) {
                    var c_26 = numberToChar((65533 >>> 10 | 0) + 55232 | 0);
                    var _unary__edvuaz_27 = length;
                    length = _unary__edvuaz_27 + 1 | 0;
                    chars[_unary__edvuaz_27] = c_26;
                    var c_27 = numberToChar((65533 & 1023) + 56320 | 0);
                    var _unary__edvuaz_28 = length;
                    length = _unary__edvuaz_28 + 1 | 0;
                    chars[_unary__edvuaz_28] = c_27;
                  } else {
                    var c_28 = _Char___init__impl__6a9atx(65533);
                    var _unary__edvuaz_29 = length;
                    length = _unary__edvuaz_29 + 1 | 0;
                    chars[_unary__edvuaz_29] = c_28;
                  }
                } else if (codePoint_1 < 65536) {
                  if (!(65533 === 65533)) {
                    var c_29 = numberToChar((65533 >>> 10 | 0) + 55232 | 0);
                    var _unary__edvuaz_30 = length;
                    length = _unary__edvuaz_30 + 1 | 0;
                    chars[_unary__edvuaz_30] = c_29;
                    var c_30 = numberToChar((65533 & 1023) + 56320 | 0);
                    var _unary__edvuaz_31 = length;
                    length = _unary__edvuaz_31 + 1 | 0;
                    chars[_unary__edvuaz_31] = c_30;
                  } else {
                    var c_31 = _Char___init__impl__6a9atx(65533);
                    var _unary__edvuaz_32 = length;
                    length = _unary__edvuaz_32 + 1 | 0;
                    chars[_unary__edvuaz_32] = c_31;
                  }
                } else {
                  if (!(codePoint_1 === 65533)) {
                    var c_32 = numberToChar((codePoint_1 >>> 10 | 0) + 55232 | 0);
                    var _unary__edvuaz_33 = length;
                    length = _unary__edvuaz_33 + 1 | 0;
                    chars[_unary__edvuaz_33] = c_32;
                    var c_33 = numberToChar((codePoint_1 & 1023) + 56320 | 0);
                    var _unary__edvuaz_34 = length;
                    length = _unary__edvuaz_34 + 1 | 0;
                    chars[_unary__edvuaz_34] = c_33;
                  } else {
                    var c_34 = _Char___init__impl__6a9atx(65533);
                    var _unary__edvuaz_35 = length;
                    length = _unary__edvuaz_35 + 1 | 0;
                    chars[_unary__edvuaz_35] = c_34;
                  }
                }
                tmp$ret$36 = 4;
              }
              index = tmp_2 + tmp$ret$36 | 0;
            } else {
              var c_35 = _Char___init__impl__6a9atx(65533);
              var _unary__edvuaz_36 = length;
              length = _unary__edvuaz_36 + 1 | 0;
              chars[_unary__edvuaz_36] = c_35;
              index = index + 1 | 0;
            }
          }
        }
      }
    }
    return concatToString(chars, 0, length);
  }
  function get_SegmentReadContextImpl() {
    _init_properties_UnsafeBufferOperations_kt__xw75gy();
    return SegmentReadContextImpl;
  }
  var SegmentReadContextImpl;
  function get_SegmentWriteContextImpl() {
    _init_properties_UnsafeBufferOperations_kt__xw75gy();
    return SegmentWriteContextImpl;
  }
  var SegmentWriteContextImpl;
  var BufferIterationContextImpl;
  function UnsafeBufferOperations() {
  }
  var UnsafeBufferOperations_instance;
  function UnsafeBufferOperations_getInstance() {
    return UnsafeBufferOperations_instance;
  }
  function SegmentReadContextImpl$1() {
  }
  protoOf(SegmentReadContextImpl$1).x1i = function (segment, offset) {
    return segment.w1h(offset);
  };
  function SegmentWriteContextImpl$1() {
  }
  protoOf(SegmentWriteContextImpl$1).x1j = function (segment, offset, value) {
    segment.q1j(offset, value);
  };
  protoOf(SegmentWriteContextImpl$1).w1j = function (segment, offset, b0, b1) {
    segment.r1j(offset, b0, b1);
  };
  protoOf(SegmentWriteContextImpl$1).v1j = function (segment, offset, b0, b1, b2) {
    segment.s1j(offset, b0, b1, b2);
  };
  protoOf(SegmentWriteContextImpl$1).u1j = function (segment, offset, b0, b1, b2, b3) {
    segment.t1j(offset, b0, b1, b2, b3);
  };
  function BufferIterationContextImpl$1() {
  }
  protoOf(BufferIterationContextImpl$1).x1i = function (segment, offset) {
    return get_SegmentReadContextImpl().x1i(segment, offset);
  };
  var properties_initialized_UnsafeBufferOperations_kt_2xfgoc;
  function _init_properties_UnsafeBufferOperations_kt__xw75gy() {
    if (!properties_initialized_UnsafeBufferOperations_kt_2xfgoc) {
      properties_initialized_UnsafeBufferOperations_kt_2xfgoc = true;
      SegmentReadContextImpl = new SegmentReadContextImpl$1();
      SegmentWriteContextImpl = new SegmentWriteContextImpl$1();
      BufferIterationContextImpl = new BufferIterationContextImpl$1();
    }
  }
  function IOException_init_$Init$($this) {
    Exception_init_$Init$($this);
    IOException.call($this);
    return $this;
  }
  function IOException_init_$Create$() {
    var tmp = IOException_init_$Init$(objectCreate(protoOf(IOException)));
    captureStack(tmp, IOException_init_$Create$);
    return tmp;
  }
  function IOException_init_$Init$_0(message, $this) {
    Exception_init_$Init$_0(message, $this);
    IOException.call($this);
    return $this;
  }
  function IOException_init_$Create$_0(message) {
    var tmp = IOException_init_$Init$_0(message, objectCreate(protoOf(IOException)));
    captureStack(tmp, IOException_init_$Create$_0);
    return tmp;
  }
  function IOException_init_$Init$_1(message, cause, $this) {
    Exception_init_$Init$_1(message, cause, $this);
    IOException.call($this);
    return $this;
  }
  function IOException_init_$Create$_1(message, cause) {
    var tmp = IOException_init_$Init$_1(message, cause, objectCreate(protoOf(IOException)));
    captureStack(tmp, IOException_init_$Create$_1);
    return tmp;
  }
  function IOException() {
    captureStack(this, IOException);
  }
  function EOFException_init_$Init$($this) {
    IOException_init_$Init$($this);
    EOFException.call($this);
    return $this;
  }
  function EOFException_init_$Create$() {
    var tmp = EOFException_init_$Init$(objectCreate(protoOf(EOFException)));
    captureStack(tmp, EOFException_init_$Create$);
    return tmp;
  }
  function EOFException_init_$Init$_0(message, $this) {
    IOException_init_$Init$_0(message, $this);
    EOFException.call($this);
    return $this;
  }
  function EOFException_init_$Create$_0(message) {
    var tmp = EOFException_init_$Init$_0(message, objectCreate(protoOf(EOFException)));
    captureStack(tmp, EOFException_init_$Create$_0);
    return tmp;
  }
  function EOFException() {
    captureStack(this, EOFException);
  }
  function SegmentPool() {
    this.g1i_1 = 0;
    this.h1i_1 = 0;
  }
  protoOf(SegmentPool).i1i = function () {
    return Companion_instance.l1j();
  };
  protoOf(SegmentPool).y1i = function (segment) {
  };
  protoOf(SegmentPool).n1j = function () {
    return AlwaysSharedCopyTracker_getInstance();
  };
  var SegmentPool_instance;
  function SegmentPool_getInstance() {
    return SegmentPool_instance;
  }
  //region block: post-declaration
  protoOf(Buffer).m1i = write$default;
  //endregion
  //region block: init
  Companion_instance = new Companion();
  UnsafeBufferOperations_instance = new UnsafeBufferOperations();
  SegmentPool_instance = new SegmentPool();
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = EOFException_init_$Create$_0;
  _.$_$.b = IOException_init_$Init$_0;
  _.$_$.c = IOException_init_$Create$_0;
  _.$_$.d = IOException_init_$Init$_1;
  _.$_$.e = IOException_init_$Create$_1;
  _.$_$.f = Buffer;
  _.$_$.g = IOException;
  _.$_$.h = Source;
  _.$_$.i = indexOf_1;
  _.$_$.j = readByteArray_0;
  _.$_$.k = readByteArray;
  _.$_$.l = readByteString;
  _.$_$.m = readString_0;
  _.$_$.n = readString;
  _.$_$.o = writeString;
  //endregion
  return _;
}));

//# sourceMappingURL=kotlinx-io-kotlinx-io-core.js.map
